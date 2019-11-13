      
      
      
      
      <div id="header1">
        <nav role="navigation">
            <div id="menuToggle">
                <input class="hamburger" type="checkbox" />
                
                <span></span>
                <span></span>
                <span></span>
                
                <ul id="menu">
                    <a class="navLink" href="#prez"><li>Présentation</li></a>
                    <a class="navLink" href="#startup"><li>Startups</li></a>
                    <a class="navLink" href="#ESN"><li>ESN</li></a>
                    <a class="navLink" href="#agenceweb"><li>Agences Web</li></a>
                    <a class="navLink" href="#contact"><li>Nous contacter</li></a>
                </ul>
            </div>
        </nav>
    </div>



/*********HTML*/

       <header><div id="menuprincipal">
        <nav class="headerN">
                <ul>
                    <li class="section"><div class="logo1"><img src="./Images/logowild.png"></div></img></li>
                    <li class="section"><a href="#prez">Présentation</a></li>
                    <li class="section"><a href="#startup">Start-up</a></li>
                    <li class="section"><a href="#ESN">ESN</a></li>
                    <li class="section"><a href="#agenceweb">Agences Web</a></li>
                    <li class="section"><a href="#contact">Nous contacter</a></li>
                </ul>
        </nav>
    </header></div>

/****************CSS*/
header {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 15pt;
    background-color: #F65454;
    display: flex;
    width: 100%;
    position: sticky;
  }
  
  .logo1 {
    margin-right: 10%;
    display: flex;

  }

  
  .section {
    display: inline-block;
    justify-content: space-between;
  }
  
  .section a {
    color: white;
    padding: 0px 30px;
  }
  
  .section a:hover {
    background-color: gray;
    border-radius:5px;
  }
  
  h1 {
    font-family: Arial, sans-serifArial, sans-serif;
  }

  #menu{
    display:none;
  }
  /******FIN VRAI*/





    /*==========responsive menu toggle (Zak) ==========*/
    .navLink{
    text-decoration: none;
    color: #232323;
    transition: color 0.3s ease;
  }

  .navLink:hover{
    text-decoration:underline;
  }

  #menuToggle{
    display: block;
    position: absolute;
    top: 50px;
    right: 50px;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
  }

  #menuToggle input
  {
    display: block;
    position:absolute;
    width: 50px;
    height: 33px;
    top: -7px;
    right:-10px;
    cursor: pointer;

    opacity: 0; /* hide this */
    z-index: 2; /* and place it over the hamburger */
    
    -webkit-touch-callout: none;
  }

  /*Just a quick hamburger*/
  #menuToggle span
  {
    display: block;
    position: absolute;
    right:10%;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: #cdcdcd;
    border-radius: 0;
    
    z-index: 1;
    
    transform-origin: 4px 0px;
    
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                opacity 0.55s ease;
  }

  #menuToggle span:first-child{
    transform-origin: 0% 0%;
  }

  #menuToggle span:nth-last-child(2){
    transform-origin: 0% 100%;
  }

  /* Transform all the slices of hamburger into a crossmark.*/
  #menuToggle input:checked ~ span{
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
  }

  /*But let's hide the middle one.*/
  #menuToggle input:checked ~ span:nth-last-child(3){
    opacity: 0;
    overflow:hiden;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  /*Ohyeah and the last one should go the other direction*/
  #menuToggle input:checked ~ span:nth-last-child(2){
    transform: rotate(-45deg) translate(0, -1px);
  }

  /*Make this absolute positioned at the top left of the screen*/
  #menu{
    position: absolute;
    width: 300px;
    right:-150px;
    margin: -100px 0 0 0;
    padding: 50px;
    padding-top: 125px;
    
    background: #ededed;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    /* to stop flickering of text in safari */
    
    transform-origin: 0% 0%;
    transform: translate(100%, 0);
    
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  }

  #menu li{
    padding: 10px 0;
    font-size: 22px;
  }

  /*And let's slide it in from the left*/
  #menuToggle input:checked ~ ul{
    transform: none;
  }
  /****FIN du menu responsive (Zak)***********/