/**
 *
 * articleModel
 *
 */

// import constants
import * as ActionTypes from "constants/actionTypes";

export interface Article {
  uid: string;
  content: string;
  title: string;
  day: Date;
  tag_ids: string[];
  thumbnail_image_path: string;
  favorite_count: number;
}
