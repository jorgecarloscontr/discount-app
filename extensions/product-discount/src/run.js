// @ts-check
import { DiscountApplicationStrategy } from "../generated/api";

/**
 * @typedef {import("../generated/api").RunInput} RunInput
 * @typedef {import("../generated/api").FunctionRunResult} FunctionRunResult
 * @typedef {import("../generated/api").Target} Target
 * @typedef {import("../generated/api").ProductVariant} ProductVariant
 */

/**
 * @type {FunctionRunResult}
 */
const EMPTY_DISCOUNT = {
  discountApplicationStrategy: DiscountApplicationStrategy.First,
  discounts: [],
};

/**
 * @param {RunInput} input
 * @returns {FunctionRunResult}
 */
export function run(input) {
  /**
   * @type {{
   *   quantity: number
   *   percentage: number
   * }}
   */
  // const configuration = JSON.parse(
  //   input?.discountNode?.metafield?.value ?? "{}",
  // );
  // if (!configuration.quantity || !configuration.percentage) {
  //   return EMPTY_DISCOUNT;
  // }

  const discounts = [];
  
  const targets1 = input.cart.lines
    .filter((line) => line.quantity == 2)
    .map((line) => {
      return /** @type {Target} */ ({
        cartLine: {
          id: line.id,
        },
      });
    });

  if(targets1.length){
    discounts.push({
      targets: targets1,
      value: {
        percentage: {
          value: "20",
        },
      },
    });
  }

  const targets2= input.cart.lines
    .filter((line) => line.quantity == 3)
    .map((line) => {
      return /** @type {Target} */ ({
        cartLine: {
          id: line.id,
        },
      });
    });

  if(targets2.length){
      discounts.push({
        targets: targets2,
        value: {
          percentage: {
            value: "30",
          },
        },
      });
  }

  const target3 = input.cart.lines
    .filter((line) => line.quantity == 4)
    .map((line) => {
      return /** @type {Target} */ ({
        cartLine: {
          id: line.id,
        },
      });
    });

  if(target3.length){
      discounts.push({
        targets: target3,
        value: {
          percentage: {
            value: "40",
          },
        },
      });
  }

  const target4 = input.cart.lines
    .filter((line) => line.quantity == 5)
    .map((line) => {
      return /** @type {Target} */ ({
        cartLine: {
          id: line.id,
        },
      });
    });

  if(target4.length){
      discounts.push({
        targets: target4,
        value: {
          percentage: {
            value: "50",
          },
        },
      });
  }

  const target5 = input.cart.lines
    .filter((line) => line.quantity == 6)
    .map((line) => {
      return /** @type {Target} */ ({
        cartLine: {
          id: line.id,
        },
      });
    });

  if(target5.length){
      discounts.push({
        targets: target5,
        value: {
          percentage: {
            value: "60",
          },
        },
      });
  }

  const target6 = input.cart.lines
    .filter((line) => line.quantity >= 7)
    .map((line) => {
      return /** @type {Target} */ ({
        cartLine: {
          id: line.id,
        },
      });
    });

  if(target6.length){
      discounts.push({
        targets: target6,
        value: {
          percentage: {
            value: "70",
          },
        },
      });
  }

  if (!discounts.length) {
    console.error("No cart lines qualify for volume discount.");
    return EMPTY_DISCOUNT;
  }

  return {
    discounts,
    discountApplicationStrategy: DiscountApplicationStrategy.All,
  };
}
