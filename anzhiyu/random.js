var posts=["2024/07/13/杂谈/BUPT AI大三下生存指南/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };