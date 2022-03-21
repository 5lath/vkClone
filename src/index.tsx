<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title> VK Clone </title>
    <link rel = "stylesheet" href="./index.css">
</head>
<body class="app">
    <header class="head">
        <a href="" class="head_logo link" href ="/">
            <img src="logo128.png" alt="logo" width="55%" height="55%"  /> 
        </a>

        <input type="search" class="head_search" placeholder="  🔍︎Поиск"</input>

        <a href="" class="head_notification link" href ="/">
            <img src="notification.png" alt="notification" width="90%" height="90%"  /> 
        </a>

        <a href="" class="head_music link" href ="/">
            <img src="music.png" alt="music" width="100%" height="100%"  /> 
        </a>

        <div class = "head_person">
        <a href="" class="head_personName link" href ="/">
            <h2  class="head_name">Денис</h2>
        </a> 
        <a href="" class="head_personAvatar link" href ="/"></a>
            <img class="head_avatar" src="avatar.jpg" alt="avatar" width="40px" height="40px"  />
        </a> 
        </div>

    </header>

    <aside class="aside myBorder">
        <ul class="tags">
            <li class="tag"><a href="" class="link">Моя страница</a></li>
            <li class="tag"><a href="" class="link">Новости</a></li>
            <li class="tag"><a href="" class="link">Сообщения</a></li>
            <li class="tag"><a href="" class="link">Друзья</a></li>
            <li class="tag"><a href="" class="link">Группы</a></li>
            <li class="tag"><a href="" class="link">Музыка</a></li>
        </ul>
    </aside>

    <main class="content myBorder">

        <div class="content_photoBlock">
            <img class="content_profileImage"src="avatar.jpg" alt="logo" width="90%" height="90%"  />
            <div class="content_messageAndFriendReq">
                <div class="content_messageAndFriendReq__message">              
                    <a href="" class="link">Отправить сообщение</a>
                </div> 
                <div class="content_messageAndFriendReq__friendReq">          
                    <a href="" class="link">Добавить в друзья</a>
                </div> 
            </div> 
            <div class="content_presents">
                <div class="content_presents__presentsCount">          
                    <a href="" class="link">2 подарка</a>
                </div> 
                <ul class="content_presents__presentsIcos">
                    <a href="" class="link"><img class="content_presents__presentsIco"src="present.png" alt="logo" width="60px" height="60px"  /></a>
                    <a href="" class="link"><img class="content_presents__presentsIco"src="present.png" alt="logo" width="60px" height="60px"  /></a>
                </ul>
            </div> 
            <div class="content_friends">
                <div class="content_friends__friendsCount">          
                    <a href="" class="link">3 друга</a>
                </div> 
                <ul class="content_friends__friendsIcos">
                    <a href="" class="link"><img class="content_friends__friendsIco"src="lizard1.jpg" alt="logo" width="60px" height="60px"  /></a>
                    <a href="" class="link"><img class="content_friends__friendsIco"src="lizard2.jpg" alt="logo" width="60px" height="60px"  /></a>
                    <a href="" class="link"><img class="content_friends__friendsIco"src="lizard3.jpg" alt="logo" width="60px" height="60px"  /></a>
                </ul>
            </div> 
        </div>
        
        <div class="content_infoBlock">
            <div class="content_infoBlock___main"> 
                <div class="content_infoBlock__head">
                    <div class="content_infoBlock__head___name">
                        Денис Соколов
                    </div>
                    <div class="content_infoBlock__head___wasOnline">
                        был в сети сегодня в 21:44
                    </div>
                </div>
            
                <div class="content_infoBlock__body">
                    <div class="content_infoBlock__body___birthsdayDate">
                        <div class="content_infoBlock__body___birthsdayDate____Label">Дата рождения:</div>
                        <div class="content_infoBlock__body___birthsdayDate____Date">01.01.1111</div>
                    </div>
                    <div class="content_infoBlock__body___languages">
                        <div class="content_infoBlock__body___languages____Label">Языки:</div>
                        <div class="content_infoBlock__body___languages____Languages">Русский, Английский</div>
                    </div>
                </div>
            </div>
    
            <div class="content_infoBlock__photos">
                <div class="content_infoBlock__photos_photosCount">          
                    <a href="" class="link">1 фотография</a>
                </div> 
                <ul class="content_infoBlock__photos_photosIcos">
                    <a href="" class="link"><img class="content_infoBlock__photos_photosIco"src="lizardSss.jpg" alt="logo" width="192px" height="108px"  /></a>
                    <a href="" class="link"><img class="content_infoBlock__photos_photosIco"src="minimalism.jpg" alt="logo" width="192px" height="108px"  /></a>
                </ul>
            </div>
        
    
        <div class="content_infoBlock__notes">
            <div class="content_infoBlock__notes___head">
                    <a href="" class="link">1 запись</a>
            </div>
            <div class="content_infoBlock__notes___content">
                <div class="content_infoBlock__notes___content____note note">
                    <h2 class="note_head">Новость 1</h2>
                    <div class="note_body">
                        Это тестовая новость. Нужно ли вообще наполнение страницы контентом на этапе верстки?
                    </div>
                </div>
            </div>
            </div>
        </div>
            
    
    
        </div>
        </div>
        </main>

    <footer class="footer">
        <div class="footer_links">
            <a href="" class="footer_about link" href ="/">about</a>
            <a href="" class="footer_terms link" href ="/">terms</a>
            <a href="" class="footer_developers link" href ="/">developers</a>
        </div>

        <div class="footer_copyright">
            <a href="" class="footer_VK link" href ="/">VK</a></li>
            <p class="footer_copyright__title">© 2006-2012</p>
        </div>
    </footer>

    <div id = "freeSpaceBorder_right" class="freeSpace freeSpaceBorder">       
    </div>

    <div id = "freeSpaceBorder_left" class="freeSpace freeSpaceBorder">       
    </div>

    <div id = "freeSpace_leftUnderAside" class="freeSpace">       
    </div>
</body>

</html>