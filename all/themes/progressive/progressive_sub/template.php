<?php
/**
 * Created by PhpStorm.
 * User: massimomoro
 * Date: 14/11/17
 * Time: 16:09
 */
function progressive_sub_preprocess_node(&$variables) {
  $matches = "node/320";
  $path = drupal_get_path_alias($_GET['q']);
  $page_match = drupal_match_path($path, $matches);

  if ($variables['nid'] == '320' || $variables['nid'] == '321' || $variables['nid'] == '322' || $variables['nid'] == '329' || $variables['nid'] == '330' || $variables['nid'] == '331') {
    drupal_add_js(drupal_get_path('theme', 'progressive_sub') . '/js/wedding.js');
  }
}