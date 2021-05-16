var inputs = []

function getPara()
{
    for (var i = 1 ; i <=6 ; i++)
    {
        inputs.push(document.getElementById("1" + i).value);
    }

    inputs.join(". ");

    document.getElementById("fullPara").innerHTML = inputs.join(". ");
}