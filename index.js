const lineHelper = new LineHelper();

// Draw lines
lineHelper.drawLine("#left-instagram", ".dashboard");
lineHelper.drawLine("#left-facebook", ".dashboard");
lineHelper.drawLine("#left-linkedin", ".dashboard");
lineHelper.drawLine("#left-twitter", ".dashboard");
lineHelper.drawLine("#left-skype", ".dashboard");
lineHelper.drawLine(".dashboard", "#right-instagram");
lineHelper.drawLine(".dashboard", "#right-twitter");
lineHelper.drawLine(".dashboard", "#right-facebook");
lineHelper.drawLine(".dashboard", "#right-skype");

// Animate numbers
$("p.center.white").numberAnimate();

// For demo purpose
setTimeout(() => {
      lineHelper.highlightLine("#left-twitter", ".dashboard", "New post received");
}, 1000);

setTimeout(() => {
      $("p.center.white").eq(0).numberAnimate("set", 400);
}, 6000);

setTimeout(() => {
      lineHelper.highlightLine(".dashboard", "#right-instagram", "Publishing a post as scheduled");
}, 11000);

// Decrease number
setTimeout(() => {
      $("p.center.white").eq(1).numberAnimate("set", 246);
}, 13000);

setTimeout(() => {
      $("p.center.white").eq(2).numberAnimate("set", 277);
}, 13000);