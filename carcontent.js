console.log("card contents");
function showItem1(){
    // this for new data showing 
    document.querySelector(".contentShow1").style.display="block";
    document.querySelector(".contentShow2").style.display="none";
    document.querySelector(".contentShow3").style.display="none";
    document.querySelector(".contentShow4").style.display="none";
  
    // creating main dev
    let mainDiv= document.createElement("div");
  mainDiv.style.cssText = "height: 40%px; width: 60%; border: 1px solid rebeccapurple; margin: auto;";
  
    // image tag creating and appending the image into main div 
  let img1=document.createElement("img");
  img1.src="./Thar.png";
  img1.style.cssText="float:left;";
  mainDiv.append(img1);

  let info1=document.createElement("h2");
  info1.innerText="The vehicle was launched in the Indian market on October 4, 2010[1] to fill the void left by its predecessor, the Mahindra MM540. The Thar has been voted one of the top-10 SUVs available in the Indian market. Three variants - DI 2WD, DI 4WD, and CRDe, are available with soft-top versions. The Thar also comes with a seven-seater option, though it can be converted into a two-seater.Mahindra Automotive North America unveiled a variant of the Thar for United States market called the Roxor at its assembly plant in Auburn Hills, Michigan. It is assembled from complete knock-down kits. Unlike the Thar, the Roxor is not street legal, and is positioned as a side-by-side off-road vehicle with a top speed of 45 mph. The Roxor is powered by a 2.5 L turbodiesel, four-cylinder engine producing 62 hp and 144 lb-ft of torque, mated to a five-speed manual transmission. An automatic transmission is available as an option. It is only available with two seats, a 148-inch body length, and a 96-inch wheelbase.Global NCAP crash-tested the second-generation Mahindra Thar in its basic safety specification of two airbags and ISOFIX anchorages in 2020 (similar to Latin NCAP 2013). It achieved four stars for adult protection, with its passenger compartment remaining stable in the offset frontal test. However, its footwell ruptured during the test. The car was penalised for instability of footwell response and for this reason Mahindra was denied the opportunity of demonstrating that sharp structures in the dashboard could prove benign to the knees of differently sized occupants. Hence Global NCAP penalised the knee areas and the vehicle could not achieve the maximum five star rating for adult protection.Nevertheless, Mahindra requested an ECE side impact test for the Thar, in which the car passed this basic test despite not being fitted with side airbags.[7] The driver's seat in the Mahindra Thar is high enough for the car to be exempted from this regulation, but Global NCAP required that the test be performed nevertheless. However, since the Thar lost crucial points in the frontal impact, the side impact had no influence on the result.The Mahindra Thar was sold in a basic trim level with side-facing rear seats. These seats were not fitted with three-point seatbelts or ISOFIX anchorages and would render the vehicle unsuitable for safely transporting children, which would cause Global NCAP to award the car no stars for child occupant protection. Global NCAP warned Mahindra to withdraw this variant of the Thar from the market, failing which they would publish a result of this basic variant in addition to the tested variant. Global NCAP only agreed to publish the result of a variant with forward-facing seats after sales of the basic variant were stopped,[8] making forward-facing seats the basic specification for the model.Mahindra also requested Global NCAP to test the Thar's optional electronic stability control. The model met minimum performance requirements for yaw rate in the UN's test with a steering robot, but it showed unstable dynamic behaviour with tendency to roll, and Global NCAP recommended an improvement, to deliver a more robust performance in real-life scenarios."
    
  mainDiv.append(info1);
  document.querySelector(".contentShow1").append(mainDiv);
}


function showItem2(){

    // this for new data showing 
    document.querySelector(".contentShow1").style.display="none";
    document.querySelector(".contentShow2").style.display="block";
    document.querySelector(".contentShow3").style.display="none";
    document.querySelector(".contentShow4").style.display="none";

    let mainDiv= document.createElement("div");
  mainDiv.style.cssText = "height: 40%px; width: 60%; border: 1px solid rebeccapurple; margin: auto;";
  document.querySelector(".contentShow2").append(mainDiv);

  let img1=document.createElement("img");
  img1.src="./Apple_watch.jpg";
  img1.style.cssText="float:left;";
  mainDiv.append(img1);

  let info1=document.createElement("h2");
  info1.innerText="Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and services. The Apple Watch was released in April 2015,[18][19] and quickly became the best-selling wearable device: 4.2 million were sold in the second quarter of fiscal 2015,[20] and more than 101 million people were estimated to use an Apple Watch as of December 2020.[21] Apple has introduced a new generation of the Apple Watch with improved internal components each September[22]—each labeled by Apple as a 'Series', with certain exceptions.[a]Each Series has been initially sold in multiple variants defined by the watch casing's material, color, and size (except for the budget watches Series 1 and SE, available only in aluminum,[23][26] and the Ultra, available only in 49 mm uncolored titanium[25]), and beginning with Series 3, by the option in the aluminum variants for LTE cellular connectivity, which comes standard with the other materials.[27] The band included with the watch can be selected from multiple options from Apple, and watch variants in aluminum co-branded with Nike and in stainless steel co-branded with Hermès are also offered, which include exclusive bands, colors, and digital watch faces carrying those companies' branding.[27]The Apple Watch operates in conjunction with the user's iPhone for functions such as configuring the watch and syncing data with iPhone apps, but can separately connect to a Wi-Fi network for data-reliant purposes, including communications, app use, and audio streaming.[28][29] LTE-equipped models can also perform these functions over a mobile network, and can make and receive phone calls independently when the paired iPhone is not nearby or is powered-off, substantially reducing the need for an iPhone after initial setup.[b] The oldest iPhone model that is compatible with any given Apple Watch depends on the version of system software installed on each device.[32] As of September 2022, new Apple Watches come with watchOS 9 preinstalled and require an iPhone running iOS 16, which is available for the iPhone 8 and later.[33]The goal of the Apple Watch was to complement an iPhone and add new functions, and to free people from their phones.[34]Kevin Lynch was hired by the Apple to make wearable technology for the wrist. He said:People are carrying their phones with them and looking at the screen so much. People want that level of engagement. But how do we provide it in a way that's a little more human, a little more at the moment when you're with somebody?development process was held under wraps until a Wired article revealed how some internal design decisions were made.[34]speculated that Apple was developing a wearable variation of the iPod that would curve around the user's wrist, and feature Siri integration.[35] In February 2013, The New York Times and The Wall Street Journal reported that Apple was beginning to develop an iOS-based smartwatch with a curved display.[36] That same month, Bloomberg reported that Apple's smartwatch project was with a team of about 100 designers.[37] In July 2013, Financial Times reported that Apple had begun hiring more employees to work on the smartwatch, and that it was targeting a retail release in late 2014.[38]";
  mainDiv.append(info1);
}

function showItem3(){

    // this for new data showing 
    document.querySelector(".contentShow1").style.display="none";
    document.querySelector(".contentShow2").style.display="none";
    document.querySelector(".contentShow3").style.display="block";
    document.querySelector(".contentShow4").style.display="none";

    let mainDiv= document.createElement("div");
  mainDiv.style.cssText = "height: 40%px; width: 60%; border: 1px solid rebeccapurple; margin: auto;";
  document.querySelector(".contentShow3").append(mainDiv);

  let img1=document.createElement("img");
  img1.src="./bullet.png";
  img1.style.cssText="float:left;";
  mainDiv.append(img1);

  let info1=document.createElement("h2");
  info1.innerText="The Royal Enfield Bullet was originally an overhead-valve single-cylinder four-stroke motorcycle made by Royal Enfield in Redditch, Worcestershire, now produced by Royal Enfield (India) at Chennai, Tamil Nadu, a company originally founded by Madras Motors to build Royal Enfield motorcycles under licence in India. The Royal Enfield Bullet has the longest unchanged production run of any motorcycle having remained continuously in production since 1948.[1][2] The Bullet marque is even older, and has passed 75 years of continuous production. The Royal Enfield and Bullet names derive from the British company which had been a subcontractor to Royal Small Arms Factory in Enfield, London.[2]Introduced in 1931 as a four-stroke single-cylinder motorcycle, this model was the first to feature the Bullet name. It was different in a number of ways from its successors (which are now familiar): it had an inclined engine with exposed valve gear featuring four valves per cylinder with 350 cc and 500 cc options. In 1933, a 250 cc option was also added to the range.[3] Its frame was also considerably different, having centre-spring girder front forks, being among a new range of models from Royal Enfield that featured them, along with a saddle-type fuel tank. However, common to motorcycles of this period, it had a rigid rear-end, necessitating a 'sprung' seat for the rider, which resulted in the iconic look of the motorcycle that is much replicated today, even though the sprung seat is unnecessary in modern models.A number of changes were implemented in order to bring the bike up to date. This model featured a vertical engine with an alloy head and higher compression. The frame was changed to a fully sprung design using a swing-arm with non-adjustable hydraulic shockers at the rear, while the front used a brand-new telescopic fork of Royal Enfield's own design. This enabled the introduction of a dualseat made of simple foam and with no large springs. Power transmission was via the same four-speed Albion gearbox as the previous model, with a unique 'neutral-finder' lever the rider could press from any gear other than first to shift to neutral. The crankshaft continued to have a fully floating big-end bearing. The headlight assembly was enclosed with the speedometer and ammeter into a nacelle, which also served as the attachment of the front suspension as well as the handlebars. An otherwise similar model, but with an engine displacement of 499 cc, made its debut in 1953.The prototype had done well in a performance trial and went on to win the trophy[4] at the 1948 International Six Days Trial and two Bullet riders won gold medals.[5] In 1952 Johnny Brittain won the Scottish Six Days Trial on a Royal Enfield Bullet and in 1953 he also won the International Six Days Trial without losing a single point.[1]In 1949, the Indian Army ordered Royal Enfield Bullets for border patrol use and the company decided to open a factory in Madras. In 1955, the 350 cc Bullets were sent from the Redditch factory in kit form for assembly in India, but Enfield India Ltd. soon developed the factory and produced complete motorcycles independently under licence. The 1955 model remained almost unchanged for years and Madras produced over 20,000 Bullets annually.[3]";                   
  mainDiv.append(info1);
}

function showItem4(){

        // this for new data showing 
        document.querySelector(".contentShow1").style.display="none";
        document.querySelector(".contentShow2").style.display="none";
        document.querySelector(".contentShow3").style.display="none";
        document.querySelector(".contentShow4").style.display="block";

    let mainDiv= document.createElement("div");
  mainDiv.style.cssText = "height: 40%px; width: 60%; border: 1px solid rebeccapurple; margin: auto;";
  document.querySelector(".contentShow4").append(mainDiv);

  let img1=document.createElement("img");
  img1.src="./Become-a-Full-Stack-Developer.jpg";
  img1.style.cssText="float:left;";
  mainDiv.append(img1);

  let info1=document.createElement("h2");
  info1.innerText=" A full-stack developer is a developer or engineer who can build both the front end and the back end of a website. The front end (the parts of a website a user sees and interacts with) and the back end (the behind-the-scenes data storage and processing) require different skill sets. Since full-stack developers are involved with all aspects of the development process, they must have expertise in both.A full-stack developer can work in-house or at a computer development company that engineers websites, software, and other components for other businesses.Full-stack developers design and create websites and applications for various platforms. A full-stack developer’s job description might include the followingThe world of full-stack development is large, and many new and evolving technologies continually push the limits of what a full-stack developer can create. Staying on top of cutting-edge technology and techniques in the full-stack development field is one of the many exciting aspects of working in this role.According to LinkedIn's 2020 Emerging Jobs Report, the industries with the most full-stack developer jobs areFull-stack developers may be creative, graphically inclined, internet- and tech-savvy, and have excellent attention to detail. You’ll want to learn the following skills to have a career in full-stack development:Front-end development is the process of creating the interface of a website. It entails coding details like drop-down menus, fonts, colors, and page layouts. Full-stack developers should also know how to work with front-end technologies like HTML, CSS, and scripting languages such as JavaScript to make websites and applications visually viable and appealing. If you want to transition into full-stack development from back-end development, you might consider earning a Professional Certificate in front-end development from an industry leader like Meta.In computing, a solution stack or software stack is a set of software subsystems or components needed to create a complete platform such that no additional software is needed to support applications.[1] Applications are said to  the resulting platformFor example, to develop a web application, the architect defines the stack as the target operating system, web server, database, and programming language. Another version of a software stack is operating system, middleware, database, and applications.[2] Regularly, the components of a software stack are developed by different developers independently from one anotherSome components/subsystems of an overall system are chosen together often enough that the particular set is referred to by a name representing the whole, rather than by naming the parts. Typically, the name is an acronym representing the individual components.A full-stack developer is expected to be able to work in all the layers of the stack. A full-stack web developer can be defined by some[who?] as a developer or engineer who works with both the front and back ends of a website or application. This means they can lead platform builds that involve databases, user-facing websites, and working with clients during the planning phase of projects.";                   
  mainDiv.append(info1);
}