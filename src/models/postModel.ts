/**
 *
 * postModel
 *
 */

// import constants
import * as ActionTypes from "constants/actionTypes";

export interface Post {
  uid: string;
  content: string;
  title: string;
  day: string;
  tag_ids: string[];
  thumbnail_image_path: string;
  favorite_count: number;
}
