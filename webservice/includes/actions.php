<?php
/**
 * @return array
 */
function getBoss()
{
    return [

        [
            "id" => 4,
            "image" => "http://localhost/porto/AJAX/img/Artifi.png",
            "name" => "A.I. trainer",

        ],
        [
            "id" => 3,
            "image" => "http://localhost/porto/AJAX/img/flowa.png",
            "name" => "Eco buddy",

        ],
        [
            "id" => 2,
            "image" => "http://localhost/porto/AJAX/img/spider.png",
            "name" => "Fighting bots",

        ],
        [
            "id" => 1,
            "image" => "http://localhost/porto/AJAX/img/popkoor.png",
            "name" => "Popkoor!",

        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getBossDetails($id)
{
    $tags = [

        4 => [
            "description" => "In deze periode moesten wij aan de hand van A.I.
            onze computer leren om bepaalde dingen te herkennen. Zo heb ik een game gemaakt waarbij ik mijn computer getrained heb hoe een kat en een rat eruit zieet, zo kon later mijn webcam een kat of een rat herkennen.
            Maar dit is toch wel mijn favoriete gedeelte van de opdracht! Ik heb een soort spelletje gemaakt waarbij de computer de vorm van je hand herkent en hieruit aan kan geven welke letter je gemaakt heb met je hand!
            Ik noem het 'ZA HANDO' (jojo reference) ",
        ],
        3 => [
            "description" => "Bij deze opdracht gingen we in teamverband een educatieve game maken. Wij hadden als onderwerp gekozen natuur en techniek. Dus hadden wij bedacht om een game te maken waarin je planten moet planten en dat je dan per geplantte plant info kreeg over de plant en hoe planten groeien etc.
            Zo leerde kinderen van groep 5 wat bijvoorbeeld fotosynthese nou precies inhield.",
        ],
        2 => [
            "description" => "Dit was mijn allereerste project, wij werktte hier met adafruit en moesten programmeren aan de hand van blokjes, we hoefde dus niet zelf te schrijven maar alleen maar te slepen in plaats. Het was zeker een goede basis om een beetje te leren hoe programmeren in elkaar zat.
            We moesten een robot programmeren om andere robots van de tafel af te gooien, een echte strijd dus!",
        ],
        1 => [
            "description" => "Dit was de eerste opdracht in groepsverband voor een grote opdrachtgever buiten de opleiding. Voor deze opdracht hadden wij een opdrachtgever met een probleem: Een outdated website die een refreshment nodig had!
            Wij gingen als team aan de slag door een nieuwe website te maken aan de hand van grondig onderzoek van de doelgroep.Ik heb van deze opdracht echt het meeste geleerd",
        ],
    ];

    return $tags[$id];

}
