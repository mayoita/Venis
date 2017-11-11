<?php
/**
 * Created by PhpStorm.
 * User: massimomoro
 * Date: 09/11/17
 * Time: 10:56
 */
?>
<section class="regular">
    <?php foreach ($rows as $row_number => $columns): ?>
  <?php foreach ($columns as $column_number => $item): ?>
    <?php print $item; ?>
  <?php endforeach; ?>
<?php endforeach; ?>
</section>