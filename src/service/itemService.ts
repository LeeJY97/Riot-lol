import { Parser } from "htmlparser2";

import {
  Item,
  ItemCustomDescription,
  ItemCustomExtend,
  ItemCustomStats,
  ItemTable,
} from "@/types/Item";
import { ITEM_TAGS } from "@/constant/itemTags";
import version from "@/constant/constant";

const processItemData = (itemTable: ItemTable) => {
  const itemTableToArray = convertItemTableToArray(itemTable);
  const filterItems = filterItemsForRiftAndNotConsumed(itemTableToArray);
  const itemsCustomExtend = getItemsCustomExtend(filterItems);

  return itemsCustomExtend;
};

const convertItemTableToArray = (itemTable: ItemTable): Item[] => {
  return Object.entries(itemTable).map(([id, item]) => ({
    id,
    ...item,
  }));
};

const convertArrayToItemTable = (items: Item[]): ItemTable => {
  return items.reduce<ItemTable>((table, item) => {
    table[item.id] = { ...item };
    return table;
  }, {});
};

const filterItemsForRiftAndNotConsumed = (items: Item[]): Item[] => {
  const filterItems = items.filter(
    (item) => item.maps["11"] && !item.consumed && item.inStore != false,
  ); // 협곡 && !consumed && !inStore false (true인 경우 데이터가 없음)
  return filterItems;
};

const getItemsCustomExtend = (items: Item[]) => {
  const itemCustomExtend: (Item & ItemCustomExtend)[] = items.map((item) => {
    const customStats = parseStats(item.description);
    // const passiveName = parsePassiveName(item.description);
    const customPassive = parsePassive(item.description);

    const customDescription: ItemCustomDescription = {
      stats: customStats,
      passive: customPassive,
    };

    const customTags = convertItemCustomTags(item.tags);
    const defaultImage = `${process.env.NEXT_PUBLIC_DDRAGON_BASE_URL}/${version}/img/item/${item.id}.png`;

    return {
      ...item,
      customDescription,
      customTags,
      defaultImage,
    };
  });

  return itemCustomExtend;
};

const convertItemCustomTags = (tags: string[]): string[] => {
  const filteredTags = tags.filter((tag) => tag in ITEM_TAGS);
  return filteredTags;
};

const parsePassive = (description: string): string[] => {
  const values: string[] = [];
  let currentPassiveValue: string = "";
  let inPassiveSection = false;

  // <stats> 태그와 그 내용은 제거
  const cleanDescription = description.replace(/<stats>.*?<\/stats>/s, "");

  const parser = new Parser({
    onopentag(name) {
      if (name === "passive") {
        inPassiveSection = true; // passive 섹션 시작
      }
    },
    ontext(text) {
      const trimmedText = text.trim();
      if (inPassiveSection) {
        // passive 섹션일 때는 값을 무시
        return;
      } else if (trimmedText) {
        currentPassiveValue += trimmedText + " "; // passive의 설명 추가
      }
    },
    onclosetag(tagName) {
      if (tagName === "passive") {
        inPassiveSection = false; // passive 섹션 종료
      }
      if (tagName === "br") {
        // <br> 태그를 만날 때, 값을 배열에 추가
        if (currentPassiveValue) {
          values.push(currentPassiveValue.trim()); // 현재 값 추가
          currentPassiveValue = ""; // 값 초기화
        }
      }
    },
  });

  parser.write(cleanDescription);
  parser.end();

  // 마지막 남은 값 추가 (만약 마지막에 br 태그가 없다면)
  if (currentPassiveValue) {
    values.push(currentPassiveValue.trim());
  }

  return values;
};

const parseStats = (description: string): ItemCustomStats[] => {
  const stats: ItemCustomStats[] = [];
  let currentStatName: string = "";
  let currentStatValue: string = "";

  // <stats> 태그만 남기고 다른 태그 제거
  const statsContent = description.match(/<stats>(.*?)<\/stats>/s);
  if (!statsContent) return stats; // <stats>가 없으면 빈 배열 반환

  const contentToParse = statsContent[1]
    .replace(/<\/?(?!attention|br)\w+.*?>/g, "") // attention, br 제외한 모든 태그 제거
    .replace(/\s+/g, " ") // 중복된 공백 제거
    .trim();

  const parser = new Parser({
    onopentag(name) {
      if (name === "attention") {
        currentStatValue = ""; // 새로운 값 초기화
      }
    },
    ontext(text) {
      const trimmedText = text.trim();

      // stats 처리
      if (currentStatName === "") {
        currentStatName = trimmedText; // stats의 이름 설정
      } else if (currentStatValue === "") {
        currentStatValue = trimmedText; // attention 값 설정
      } else {
        currentStatValue += " " + trimmedText; // 여러 개일 경우
      }
    },
    onclosetag(tagName) {
      if (tagName === "attention") {
        // attention 태그가 닫힐 때, stats에 추가
        if (currentStatName && currentStatValue) {
          stats.push({
            name: currentStatName,
            value: currentStatValue,
          });
          currentStatName = ""; // 이름 초기화
          currentStatValue = ""; // 값 초기화
        }
      } else if (tagName === "br") {
        // br 태그를 만났을 때, stats에 추가
        if (currentStatName && currentStatValue) {
          stats.push({
            name: currentStatName,
            value: currentStatValue,
          });
          currentStatName = ""; // 이름 초기화
          currentStatValue = ""; // 값 초기화
        }
      }
    },
  });

  parser.write(contentToParse);
  parser.end();

  // 마지막 스탯 추가 (br이 없을 경우)
  if (currentStatName && currentStatValue) {
    stats.push({
      name: currentStatName,
      value: currentStatValue,
    });
  }

  return stats;
};
export { processItemData, convertArrayToItemTable };
