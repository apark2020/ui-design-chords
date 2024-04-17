document.addEventListener("DOMContentLoaded", function() {
  // Log the 'info' object to console for debugging
  console.log(info);

  if (info.title) {
    document.title = info.title;
  }

});
