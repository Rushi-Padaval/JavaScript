
<html>
<body>

<h1>JavaScript Operators</h1>

<p>In this example, y is incremented before it is assigned to x (pre-incremented).</p>

<p id="demo1"></p>
<p id="demo2"></p>

<script>
var y = 5;
var x = ++y;
document.getElementById("demo1").innerHTML = y;
document.getElementById("demo2").innerHTML = x;
</script>

</body>
</html>