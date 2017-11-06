<?php

/**
 * @file
 * Main view template.
 *
 * Variables available:
 * - $classes_array: An array of classes determined in
 *   template_preprocess_views_view(). Default classes are:
 *     .view
 *     .view-[css_name]
 *     .view-id-[view_name]
 *     .view-display-id-[display_name]
 *     .view-dom-id-[dom_id]
 * - $classes: A string version of $classes_array for use in the class attribute
 * - $css_name: A css-safe version of the view name.
 * - $css_class: The user-specified classes names, if any
 * - $header: The view header
 * - $footer: The view footer
 * - $rows: The results of the view query, if any
 * - $empty: The empty text to display if the view is empty
 * - $pager: The pager next/prev links to display, if any
 * - $exposed: Exposed widget form/info to display
 * - $feed_icon: Feed icon to display, if any
 * - $more: A link to view more, if any
 *
 * @ingroup views_templates
 */
kpr($view);
?>

<div class="<?php print $classes; ?> view-portfolio-filter">
  <?php print render($title_prefix); ?>
  <?php if ($title): ?>
    <?php print $title; ?>
  <?php endif; ?>
  <?php print render($title_suffix); ?>
  <?php if ($header): ?>
    <div class="view-header">
      <?php print $header; ?>
    </div>
  <?php endif; ?>

  <div class="view-filters toolbar clearfix">
    <div class="grid-list">
      <?php print (strpos($_GET['q'], theme_get_setting('shop_link_list')) === 0) ? '<a href="' . url(str_replace(theme_get_setting('shop_link_list'), theme_get_setting('shop_link'), $_GET['q'])  . '" class="grid">' : '<span class="grid">'; ?>
        <span class="glyphicon glyphicon-th-large"></span>
      <?php print (strpos($_GET['q'], theme_get_setting('shop_link_list')) === 0) ? '</a>' : '</span>'; ?>
      <?php print (strpos($_GET['q'], theme_get_setting('shop_link_list')) !== 0) ? '<a href="' . url(str_replace(theme_get_setting('shop_link'), theme_get_setting('shop_link_list'), $_GET['q']) . '" class="list">' : '<span class="list">'; ?>
        <span class="glyphicon glyphicon-th-list"></span>
      <?php print (strpos($_GET['q'], theme_get_setting('shop_link_list')) !== 0) ? '</a>' : '</span>'; ?>
    </div>
    <?php print $exposed; ?>
    <div class = "spacer md"></div>
  </div>

  <?php if ($attachment_before): ?>
    <div class="attachment attachment-before">
      <?php print $attachment_before; ?>
    </div>
  <?php endif; ?>

  <div class="content">
    <?php print $rows; ?>
  </div>
  <?php if (isset($empty)): ?>
    <div class="view-empty">
      <?php print $empty; ?>
    </div>
  <?php endif; ?>

  <?php if ($footer): ?>
    <div class="view-footer-pager hidden">
      <?php print $footer; ?>
    </div>
  <?php endif; ?>

  <?php if ($pager): ?>
    <?php print $pager; ?>
  <?php endif; ?>

  <?php if ($attachment_after): ?>
    <div class="attachment attachment-after">
      <?php print $attachment_after; ?>
    </div>
  <?php endif; ?>

  <?php if ($more): ?>
    <?php print $more; ?>
  <?php endif; ?>

  <?php if ($footer): ?>
    <div class="view-footer">
      <?php print $footer; ?>
    </div>
  <?php endif; ?>

  <?php if ($feed_icon): ?>
    <div class="feed-icon">
      <?php print $feed_icon; ?>
    </div>
  <?php endif; ?>

</div><?php /* class view */ ?>
