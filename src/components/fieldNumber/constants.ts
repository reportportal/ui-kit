import { KeyCodes } from '@common/constants/keyCodes';

export const DEFAULT_WIDTH_CH = 5;
// Extra ch offset to prevent first character clipping in Safari
export const SAFARI_CLIP_FIX_CH = 0.4;
export const MAX_WIDTH_CH = 16 + SAFARI_CLIP_FIX_CH;

export const ALLOWED_KEY_CODES = [
  KeyCodes.TAB_KEY_CODE,
  KeyCodes.BACKSPACE_KEY_CODE,
  KeyCodes.ARROW_LEFT_KEY_CODE,
  KeyCodes.ARROW_UP_KEY_CODE,
  KeyCodes.ARROW_RIGHT_KEY_CODE,
  KeyCodes.ARROW_DOWN_KEY_CODE,
  KeyCodes.DELETE_KEY_CODE,
  KeyCodes.NUM_LOCK_0_KEY_CODE,
  KeyCodes.NUM_LOCK_1_KEY_CODE,
  KeyCodes.NUM_LOCK_2_KEY_CODE,
  KeyCodes.NUM_LOCK_3_KEY_CODE,
  KeyCodes.NUM_LOCK_4_KEY_CODE,
  KeyCodes.NUM_LOCK_5_KEY_CODE,
  KeyCodes.NUM_LOCK_6_KEY_CODE,
  KeyCodes.NUM_LOCK_7_KEY_CODE,
  KeyCodes.NUM_LOCK_8_KEY_CODE,
  KeyCodes.NUM_LOCK_9_KEY_CODE,
];
