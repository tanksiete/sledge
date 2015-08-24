console.log('applying sledge...');

$fileDiffs = $('#files .file');

$body = $('body');

createFileDiffBrowser($body, $fileDiffs);

$fileDiffs.each(function() {
  $(this).hide();
});

function createFileDiffBrowser(body, fileDiffs) {
  var fileBrowserHtml = '<div id="sledge-file-browser">';

  fileBrowserHtml += '<ul>';

  fileDiffs.each(function(i) {
    fileBrowserHtml += '<li class="sledge-menu-item" id="sledge-file-browser-diff-' + i + '">' + extractFileDiffTitle($(this)) + '</li>';
  });

  fileBrowserHtml += '</ul></div>';
  $fileBrowserHtml = body.append(fileBrowserHtml).find('li.sledge-menu-item').each(function(i) {
    $(this).click(function(e) {
      $('#sledge-file-browser-diff-' + i).toggleClass('selected');
      $('#diff-' + i).toggle();
    })
  });

  function extractFileDiffTitle(fileDiff) {
    return fileDiff.find('.file-header .file-info .js-selectable-text').attr('title');
  }
}
