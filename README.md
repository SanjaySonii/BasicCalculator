<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>project14_Calculator</title>
    <link rel="stylesheet" href="project14_Calculator.css">
    <style>
        @media screen and (max-width : 574px) {
            h2 {
                font-size: large;
            }
        }

        @media screen and (max-width : 430px) {
            h2 {
                font-size: medium;
            }
        }
    </style>
</head>

<body>
    <h2>Calculator By Sanjay</h2>
    <div class="container">
        <button id="night" class="mode">&#127770</button>
        <button id="day" class="mode display1">&#127773</button>
        <div class="calSpace" id="calSpace"> 0
        </div>
        <div class="Result" id="Result">
        </div>
        <hr>
        
        <div class="calDiv">
            <div>
                <button class="number yellow" id="clear"><strong>AC</strong></button>
            </div>
            <div>
                <button class="number yellow" id="backSpace"><strong>BS</strong></button>
            </div>
            <div>
                <button class="number yellow" id="percentage"><strong>%</strong></button>
            </div>
            <div>
                <button class="number yellow" id="divide"><strong>&#xf7</strong></button>
            </div>
        </div>
        <div class="calDiv">
            <div>
                <button class="number digit" id="seven"><strong>7</strong></button>
            </div>
            <div>
                <button class="number digit" id="eight"><strong>8</strong></button>
            </div>
            <div>
                <button class="number digit" id="nine"><strong>9</strong></button>
            </div>
            <div>
                <button class="number yellow" id="multiple"><strong>x</strong></button>
            </div>
        </div>
        <div class="calDiv">
            <div>
                <button class="number digit" id="four"><strong>4</strong></button>
            </div>
            <div>
                <button class="number digit" id="five"><strong>5</strong> </button>
            </div>
            <div>
                <button class="number digit" id="six"><strong>6</strong> </button>
            </div>
            <div>
                <button class="number yellow" id="minus"><strong>-</strong> </button>
            </div>
        </div>
        <div class="calDiv">
            <div>
                <button class="number digit" id="one"><strong>1</strong> </button>
            </div>
            <div>
                <button class="number digit" id="two"><strong>2</strong> </button>
            </div>
            <div>
                <button class="number digit" id="three"><strong>3</strong> </button>
            </div>
            <div>
                <button class="number yellow" id="add"><strong>+</strong> </button>
            </div>
        </div>
        <div class="calDiv">

            <div>
                <button class="number digit" id="exp"><strong>e</strong> </button>
            </div>
            <div>
                <button class="number digit" id="zero"><strong>0</strong> </button>
            </div>
            <div>
                <button class="number" id="dot"><strong>.</strong> </button>
            </div>
            <div>
                <button class="number" id="equal"><strong>=</strong> </button>
            </div>
        </div>

    </div>



    <script src="project14_Calculator.js"></script>
</body>

</html>
<!-- https://sanjaysonii.github.io/BasicCalculator/ -->
