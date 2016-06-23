$(document).ready(function() {


for ( i = 1; i <= 100; i++ )
{
	if ( i % 3 == 0 && i % 5 == 0 )
	{
		document.writeln("fizzbuzz<br>");
	}
	else if ( i % 3 == 0 )
	{
		document.writeln("fizz<br>");
	}
	else if ( i % 5 == 0)
	{
		document.writeln("buzz<br>");
	}
	else
	{
		document.writeln(i + "<br>");
	}
}
});