var posts=["2025/02/24/demo1/","2026/01/09/demo4/","2026/01/09/demo2/","2026/01/09/demo3/","2026/01/09/demo5/","2026/01/09/demo6/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };