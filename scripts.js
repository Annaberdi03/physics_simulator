function calculate() {
  const v0 = parseFloat(document.getElementById("initialVelocity").value);
  const theta = parseFloat(document.getElementById("launchAngle").value);
  const g = parseFloat(document.getElementById("gravity").value);

  const thetaRad = (theta * Math.PI) / 180;

  const vx = v0 * Math.cos(thetaRad);
  const vy = v0 * Math.sin(thetaRad);
  const t = (2 * v0 * Math.sin(thetaRad)) / g;
  const H = Math.pow(v0 * Math.sin(thetaRad), 2) / (2 * g);
  const R = (Math.pow(v0, 2) * Math.sin(2 * thetaRad)) / g;
  const dy = v0 * Math.sin(thetaRad) * t - 0.5 * g * Math.pow(t, 2);
  const dx = vx * t;

  document.getElementById("rangeResult").textContent = R.toFixed(2);
  document.getElementById("heightResult").textContent = H.toFixed(2);
  document.getElementById("timeResult").textContent = t.toFixed(2);
  document.getElementById("verticalDisplacementResult").textContent =
    dy.toFixed(2);
  document.getElementById("verticalVelocityResult").textContent = vy.toFixed(2);
  document.getElementById(
    "verticalMotionResult"
  ).textContent = `Vertical Velocity (vy): ${vy.toFixed(
    2
  )}, Vertical Displacement (dy): ${dy.toFixed(2)}`;
  document.getElementById("horizontalDistanceResult").textContent =
    dx.toFixed(2);
  document.getElementById("horizontalVelocityResult").textContent =
    vx.toFixed(2);
}
function calculatePeriod() {
  const length = parseFloat(document.getElementById("length").value);
  const gravity = 9.81; // Acceleration due to gravity (m/s²)
  const period = 2 * Math.PI * Math.sqrt(length / gravity);

  document.getElementById("result").textContent = period.toFixed(2);
}
function calculateHooke() {
  const k = parseFloat(document.getElementById("springConstant").value);
  const x = parseFloat(document.getElementById("distance").value);

  const force = k * x;

  const result = `Force (F) = ${force.toFixed(2)} N`;

  document.getElementById("resulth").innerHTML = result;
}
function calculateEnergy() {
  const mass = parseFloat(document.getElementById("mass").value);
  const velocity = parseFloat(document.getElementById("velocity").value);
  const height = parseFloat(document.getElementById("height").value);
  const gravity = 9.81; // Acceleration due to gravity in m/s^2

  const ke = 0.5 * mass * velocity ** 2;
  const pe = mass * gravity * height;
  const me = ke + pe;

  document.getElementById("keResult").textContent = ke.toFixed(2);
  document.getElementById("peResult").textContent = pe.toFixed(2);
  document.getElementById("meResult").textContent = me.toFixed(2);
}
function calculateElasticCollision() {
  const mass1 = parseFloat(document.getElementById("mass1").value);
  const velocity1 = parseFloat(document.getElementById("velocity1").value);
  const mass2 = parseFloat(document.getElementById("mass2").value);
  const velocity2 = parseFloat(document.getElementById("velocity2").value);

  const finalVelocity1 =
    ((mass1 - mass2) * velocity1 + 2 * mass2 * velocity2) / (mass1 + mass2);
  const finalVelocity2 =
    (2 * mass1 * velocity1 + (mass2 - mass1) * velocity2) / (mass1 + mass2);

  document.getElementById("finalVelocity1").textContent =
    finalVelocity1.toFixed(2);
  document.getElementById("finalVelocity2").textContent =
    finalVelocity2.toFixed(2);
}
function calculateElectricField() {
  const k = 8.9875e9; // Coulomb's constant (N⋅m²/C²)
  const q = parseFloat(document.getElementById("charge").value);
  const r = parseFloat(document.getElementById("distance").value);

  const field = (k * Math.abs(q)) / Math.pow(r, 2);

  document.getElementById(
    "field"
  ).textContent = `Electric Field (E) = ${field.toFixed(2)} N/C`;
}

function calculateForceC() {
  const k = 8.9875e9; // Coulomb's constant (N⋅m²/C²)
  const q1 = parseFloat(document.getElementById("charge1").value);
  const q2 = parseFloat(document.getElementById("charge2").value);
  const r = parseFloat(document.getElementById("distance").value);

  const force = (k * Math.abs(q1 * q2)) / Math.pow(r, 2); // Calculate electric force

  document.getElementById(
    "columbs"
  ).textContent = `Electric Force (F) = ${force.toFixed(2)} Newtons`;
}
function calculateS() {
  const k = parseFloat(document.getElementById("springConstantt").value);
  const m = parseFloat(document.getElementById("masss").value);

  const angularFrequency = Math.sqrt(k / m);
  const period = (2 * Math.PI) / angularFrequency;
  const frequency = 1 / period;

  const result = `Angular Frequency (ω): ${angularFrequency.toFixed(
    2
  )} rad/s<br>
                  Period (T): ${period.toFixed(2)} s<br>
                  Frequency (f): ${frequency.toFixed(2)} Hz`;

  document.getElementById("spring").innerHTML = result;
}
const translations = {
  en: {
    hok: "Hook's law",
    pro: "Projectile motion",

    heading:
      "Independence of Horizontal and Vertical Motions: The horizontal and vertical" +
      "components of motion are independent of each other. The horizontal motion remains constant " +
      "(assuming no air resistance), while the vertical motion is affected by gravity.",
    content:
      "The initial velocity of a projectile can be resolved into its horizontal and vertical components using trigonometry:",
    buYerde: "Where",
    formula:
      "•	( v_{0x} ) = Initial horizontal velocity\n" +
      "•	( v_{0y} ) = Initial vertical velocity" +
      "•	( v_{0} ) = Initial velocity magnitude" +
      "•	( \theta ) = Launch angle",
    thes: "These equations represent the decomposition of the initial velocity into its horizontal and vertical components.",
    trajectory:
      "Trajectory and Shape of Path: The resulting path followed by the object is a parabolic trajectory due to the \
       simultaneous motion in horizontal and vertical directions. The shape of the path is determined by the \
       combined effects of the horizontal and vertical motions and is influenced by the launch angle.",
    themotion:
      "The vertical motion of a projectile under gravity can be described by the equation:",
    forms:
      "•	( v_{y} ) = Vertical velocity at time ( t )\
  •	( v_{0y} ) = Initial vertical velocity\
  •	( g ) = Acceleration due to gravity\
  •	( t ) = Time",
    grav: "This equation represents how the vertical velocity of the projectile changes over time due to the effect of gravity.\
    For a projectile motion, the maximum height reached and the time of flight are determined by the following formulas:",
    maxh: "•	( H ) = Maximum height\
 •	( v_{0y} ) = Initial vertical velocity\
 •	( g ) = Acceleration due to gravity\
 •	( t_{\text{flight}} ) = Time of flight\
 •	( v_{0} ) = Initial velocity magnitude\
 •	( \theta ) = Launch angle",
    flights:
      "These equations describe the maximum height reached by the projectile and the total time taken for the projectile's entire flight.\
       The range and horizontal displacement of a projectile are determined by the following formulas:",
    ranges:
      "•	( R ) = Range\
    •	( v_{0} ) = Initial velocity magnitude\
    •	( \theta ) = Launch angle\
    •	( g ) = Acceleration due to gravity\
    ",
    hor: "The horizontal displacement, which is the distance covered horizontally by the projectile, is represented by the formula for the range \
    Understanding the principles of projectile motion theory involves applying kinematic equations to analyze \
     the motion of objects launched into the air at an angle, accounting for gravitational effects in both \
      horizontal and vertical directions. This theory forms the basis for predicting and understanding the \
      behavior of projectiles in various fields, from physics to engineering and ballistics.",
    comp: "Components of a Simple Pendulum:\
    Bob: A mass suspended by a string or rod.\
    String or Rod: Provides the support for the bob.",
    comps:
      "  Factors Affecting the Pendulum:\
    Length of String or Rod (L): Longer length leads to longer oscillation periods.\
    Acceleration due to Gravity (g): Dictates the speed of the pendulum's swing.\
    Angle of Release (θ): Initial angle from the vertical at which the pendulum is released.",
    compsa:
      "Key Principles: Period of Oscillation (T): The time taken for one complete back-and-forth swing (oscillation). \
  It's given by the formula:\
 T = 2π√(L/g)\
 Frequency (f): The number of oscillations per unit time (usually in Hertz, Hz). It's the reciprocal of the period:\
 f = 1/T\
 Understanding the principles of a simple pendulum allows us to model and predict its behavior under various conditions, \
 making it a fundamental concept in physics and engineering.",
    tran: "Simple Pendulum",
    hooks:
      "Hooke's Law is a principle in physics that describes the behavior of certain materials when they undergo deformation. \
     It states that the force required to extend or compress a spring by some distance is proportional to that distance. \
      Mathematically, Hooke's Law can be expressed as:",
    forca:
      "Where: F is the force applied to the spring.\
    k is the spring constant, a measure of the stiffness of the spring.\
    x is the displacement or deformation from the spring's equilibrium position.\
    This law holds true within the elastic limit of a material, meaning the material will return to its original \
     shape and size after the force is removed as long as it doesn't exceed a certain threshold.\
     The negative sign in the equation indicates that the force exerted by the spring opposes the direction of the displacement. ",
    mechan:
      "Mechanical energy refers to the total energy possessed by an object due to its motion and position. \
     It's the sum of kinetic energy (KE) and potential energy (PE) in a system. In a closed system without any external \
      forces doing work, the total mechanical energy remains constant. This principle is known as the \
       conservation of mechanical energy. The formula for mechanical energy (ME) is:\
    Kinetic Energy (KE): It s the energy possessed by an object due to its motion. The formula for kinetic energy is: ",

    repre:
      "Where: m represents the mass of the object.\
    v is the velocity of the object.\
    Potential Energy (PE): It's the energy stored in an object due to its position or configuration. Here are two common types:\
    1. Gravitational Potential Energy (GPE): It's associated with an object's position relative to a reference point, often the Earth's surface. The formula for gravitational potential energy is:\
    GPE=m⋅g⋅h\
    m denotes the mass of the object. g represents the acceleration due to gravity (approximately 9.81 m/s 2 9.81m/s 2 on Earth's surface). ℎ h is the height or vertical position of the object.\
    2. Elastic Potential Energy (EPE): This type of energy is related to the deformation of elastic objects like springs. The formula for elastic potential energy is:\
    EPE = 1⁄2 × k × x2\
    k represents the spring constant, indicating the stiffness of the spring. x denotes the displacement from the equilibrium position of the spring\
    Understanding these forms of energy helps in calculating and analyzing the energy associated with different physical systems, whether it's the motion of objects or the stored energy within certain configurations.\
    ",
    eles: "Elestic Collision  ",
    physic:
      "In physics, an elastic collision is a type of collision in which both momentum and kinetic energy are conserved. \
     This means that the total momentum and total kinetic energy of the system before the collision \
     are equal to the total momentum and total kinetic energy after the collision.",
    total: "Total momentum is conserved:",
    moment:
      "The total momentum of the system (the sum of the momenta of all the objects involved) before the collision is equal to the total momentum after the collision.\
Mathematically, this is expressed as:",
    masse:
      "•	( m_1 ) and ( m_2 ) are the masses of the objects involved,\
    •	( v_{1i} ) and ( v_{2i} ) are the initial velocities of the objects,\
    •	( v_{1f} ) and ( v_{2f} ) are the final velocities of the objects.\
    ",
    kine: "2. Total kinetic energy is conserved:",
    ener: "The total kinetic energy of the system before the collision is equal to the total kinetic energy after the collision\
    Mathematically, this is expressed as:",
    wher: "where the terms represent the kinetic energies of the objects before and after the collision.",
    colli:
      "In an elastic collision, the objects bounce off each other without any loss of kinetic energy to other forms (such as heat, sound, or deformation). Examples of elastic collisions include collisions between billiard balls on a table or between gas molecules in ideal conditions.\
    Mechanical energy refers to the total energy possessed by an object due to its motion and position. It's the sum of kinetic energy (KE) and potential energy (PE) in a system. In a closed system without any external forces doing work, the total mechanical energy remains constant. \
     This principle is known as the conservation of mechanical energy. The formula for mechanical energy (ME) is:\
     Kinetic Energy (KE): It's the energy possessed by an object due to its motion. The formula for kinetic energy is:",
    poten:
      "Where: m represents the mass of the object.\
    v is the velocity of the object.\
    Potential Energy (PE): It's the energy stored in an object due to its position or configuration. Here are two common types:\
    1. Gravitational Potential Energy (GPE): It's associated with an object's position relative to a reference point, \
     often the Earth's surface. The formula for gravitational potential energy is:",
    deno: "m denotes the mass of the object. g represents the acceleration due to gravity (approximately 9.81 m/s 2 9.81m/s 2 on Earth's surface). ℎ h is the height or vertical position of the object.\
    2. Elastic Potential Energy (EPE): This type of energy is related to the deformation of elastic objects like springs. The formula for elastic potential energy is:\
    k represents the spring constant, indicating the stiffness of the spring. x denotes the displacement from the equilibrium position of the spring",
    funda:
      "Electric charges are fundamental properties of matter. There are two types of charges: positive and negative. Like charges repel each other, and opposite charges attract each other.\
    The electric field is a region around a charged object where another charged object experiences a force. The direction of the electric field is the direction of the force \
     that a positive test charge would experience if placed in the field.",
    charg: "Electric Charges and Fields",
    fiel: " Electric Field Intensity Formula    ",
    inten:
      "The electric field intensity (E) at a point due to a point charge Q is given by:\
    E is the electric field intensity in newtons per coulomb (N/C).\
    k is Coulomb's constant, approximately 8.99 x 10^9 N m^2/C^2.\
    |Q| is the magnitude of the point charge in coulombs (C).\
    r is the distance from the point charge to the point where the field is being measured in meters (m).",
    line: "Electric Field Lines ",
    imagi:
      "Electric field lines are imaginary lines that represent the direction of the electric field at different points around a charged object. The density of the lines indicates the strength of the field, with more lines indicating a stronger field.",
    laws: "Coulomb's Law ",
    desc: "Coulomb's Law describes the electrostatic interaction between charged particles. It states that the magnitude of the electrostatic force \
    between two point charges is directly proportional to the product of the magnitudes of the charges and inversely proportional to the square of the distance between them.\
    The mathematical expression of Coulomb's Law is:",
    magni:
      "•	( F ) is the magnitude of the electrostatic force between the charges,\
    •	( k ) is Coulomb's constant (( 8.9875 \times 10^9 ) N⋅m²/C²),\
    •	( q_1 ) and ( q_2 ) are the magnitudes of the charges,\
    •	( r ) is the distance between the charges.\
    This law helps us understand how charged particles interact with each other. It is a fundamental principle in electromagnetism and is used in various fields of science and engineering.",
    motion: "Motion of Spring and Mass ",

    attac:
      "The motion of a mass attached to a spring is a classic example of simple harmonic motion (SHM). When a mass ( m ) is attached to a spring with spring constant ( k ), the spring exerts a force on the mass given by Hooke's Law:",
    equation:
      "The equation of motion for the mass-spring system is given by Newton's second law:\
  This differential equation has solutions of the form:",
    mod: "where ( A ) is the amplitude of the oscillation, ( omega = sqrt{\frac{k}{m}} ) is the angular frequency of the oscillation, and ( phi ) is the phase angle. The period of the oscillation is given by:  ",

    sprin:
      "The motion of a mass attached to a spring is used to model many real-world phenomena, such as the motion of a mass on a vibrating object, the motion of a pendulum, and the behavior of atoms in a crystal lattice.",
    techn: "Oguz Han Engineering and Technology University of Turkmenistan",
    mener: "Mechanical energy",
  },
  es: {
    hok: "Hookyn kanuny",
    heading:
      "Gorizontal we wertikal hereketleriň garaşsyzlygy: Hereketiň kese we dik" +
      "bölekleri biri-birine garaşly däldir. Gorizontal hereket hemişelik bolup galýar" +
      "(howa garşylygy ýok öýdýän), dik hereket bolsa agyrlyk güýjüne täsir edýär.",
    content:
      "Çekişiň başlangyç tizligi, keseligine we dikligine trigonometriýa arkaly çözülip bilner:",
    buYerde: "Bu ýerde",
    formula:
      "•	 (v _ {0x} ) = Başlangyç keseligine tizlik \
      •	 (v _ {0y} ) = Başlangyç dik tizlik\
      •	 (v _ {0} ) = Başlangyç tizlik ululygy\
      •	 ( theta ) = Burç burçy",

    thes: "Bu deňlemeler başlangyç tizligiň keseligine we dikligine bölünmegini aňladýar.",
    trajectory:
      "Atholuň ugry we görnüşi: Obýektiň yzyndan gelýän ýol, gorizontal we dik ugurlarda bir wagtyň özünde \
      hereket sebäpli parabolik traýektoriýa. Patholuň görnüşi keseligine we dik hereketleriň utgaşdyrylan\
      täsirleri bilen kesgitlenýär we başlangyç burçy täsir edýär.",

    themotion:
      "Agyrlyk güýjüniň dikligine hereketini deňleme bilen düşündirip bolar:",
    forms:
      "  •	 (v _ {y} ) = Wagtynda dik tizlik  (t )\
    •	 (v _ {0y} ) = Başlangyç dik tizlik\
    •	 (g ) = Tizlenme bermeli to agyrlyk güýji\
    •	 (t ) = Wagt",
    grav: "Bu deňleme, agyrlyk güýjüniň täsiri sebäpli wagtyň dikligine tizliginiň üýtgemegini görkezýär.\
    Çekimli hereket üçin iň ýokary beýiklik we uçuş wagty aşakdaky formulalar bilen kesgitlenýär",
    maxh: "•	 (H ) = Iň ýokary beýikligi\
    •	 (v _ {0y} ) = Başlangyç dik tizlik\
    •	 (g ) = Tizlenme bermeli to agyrlyk güýji\
    •	 (t _ { text {uçuş}} ) = Uçuş wagty\
    •	 (v _ {0} ) = Başlangyç tizlik ululygy\
    •	 ( theta ) = Burç burçy\
    ",
    flights:
      "Bu deňlemeler, uçýan iň ýokary beýikligi we uçuşyň tutuş uçuşy üçin alnan umumy wagty beýan edýär.\
    Çekişiň diapazony we keseligine süýşmegi aşakdaky formulalar bilen kesgitlenýär: ",
    ranges:
      "•	 (R ) = Aralyk\
    •	 (v _ {0} ) = Başlangyç tizlik ululygy\
    •	 ( theta ) = Burç burçy\
    •	 (g ) = Tizlenme bermeli to agyrlyk güýji\
    ",
    hor: "Gorizontal süýşme, çyzyk bilen keseligine örtülen aralyk, diapazonyň formulasy bilen görkezilýär (R ).\
    Çekimli hereket teoriýasynyň ýörelgelerine düşünmek, gorizontal we wertikal ugurlarda agyrlyk güýjüniň täsirini \
     hasaba almak bilen howada goýberilen obýektleriň bir burçda hereketini seljermek üçin kinematiki \
      deňlemeleri ulanmagy öz içine alýar. Bu teoriýa , fizikadan in engineeringenerçilik we ballistika \
       çenli dürli ugurlardaky proýektleriň özüni alyp barşyny çaklamak we düşünmek üçin esas döredýär .",
    comp: "Yönekeý maýatnikiň düzüm bölekleri:\
    Bob: Setir ýa-da hasa bilen asylan massa. \
    String ýa-da Rod: Bob üçin goldaw berýär.\
    Maýatniklere täsir edýän faktorlar: ",
    comps:
      "    Setiriň ýa-da hasanyň uzynlygy (L): Uzynlyk yrgyldamanyň has uzyn bolmagyna sebäp bolýar. Agyrlyk güýji (g) sebäpli \
    tizlenme: Maýatnik yrgyldysynyň tizligini kesgitleýär. Çykyş burçy ( θ ): Wertikaldan başlangyç burç maýatnik çykýar.",
    compsa:
      "Esasy ýörelgeler: Yrgyldama döwri (T): Bir gezek yza we yrgyldama (yrgyldama) üçin alnan wagt. Formula bilen berilýär:\
    T = 2 π √ (L / g)\
    Quygylyk (f): Birligiň wagty yrgyldamalaryň sany (köplenç Gerts, Hz). Bu döwrüň özara garşylygy:\
    f = 1 / T.\
    Simpleönekeý maýatnik ýörelgelerine düşünmek, dürli şertlerde özüni alyp barşyny modellemäge we çaklamaga mümkinçilik berýär, \
     ony fizika we in engineeringenerçilikde esasy düşünje edýär.",
    tran: "Yonekey mayatnik",
    hooks:
      "Käbir materiallaryň deformasiýa bolanda özüni alyp barşyny beýan edýän ýörelge.\
    Bahary belli bir aralykda uzaltmak ýa-da gysmak üçin zerur \
    güýjüň şol aralyga proporsionaldygyny aýdýar. Matematiki taýdan Hookyň kanuny:",
    forca:
      "Bu yerde: F bahara ulanylýan güýç. \
    k bahar hemişelik, baharyň berkliginiň ölçegi. \
    x baharyň deňagramlylyk ýagdaýyndan süýşmek ýa-da deformasiýa.\
    Bu kanun materialyň elastik çäginde dogry bolup, belli bir çäkden geçmese, güýç aýrylandan soň \
    materialyň öňki görnüşine we ululygyna gaýdyp geler.\
    Deňlikdäki otrisatel alamat, baharyň beren güýjüniň süýşmegiň ugruna garşydygyny görkezýär.\
    ",
    mechan:
      "Mehaniki energiýa, hereketi we ýagdaýy sebäpli bir jisimiň eýe bolan umumy energiýasyny aňladýar. \
     Bu ulgamdaky kinetiki energiýanyň (KE) we potensial energiýanyň (PE) jemi. Daşarky güýçler işlemän ýapyk \
      ulgamda umumy mehaniki energiýa hemişelik bolýar. Bu ýörelge mehaniki energiýany tygşytlamak hökmünde bellidir. Mehaniki energiýanyň (ME) formulasy:\
    Kinetiki energiýa (KE): Hereketi sebäpli bir jisimiň eýeçiligindäki energiýa. Kinetiki energiýanyň formulasy:",
    repre:
      "Bu yerde: m obýektiň massasyny aňladýar.\
  v obýektiň tizligi.\
  Potensial energiýa (PE): ýagdaýy ýa-da konfigurasiýasy sebäpli bir obýektde saklanýan energiýa. Ine iki umumy görnüş:\
  1. Grawitasiýa potensial energiýasy (GPE): Bir obýektiň salgylanma nokadyna görä köplenç Eartheriň üstki ýagdaýy bilen baglanyşykly. Grawitasiýa potensial energiýasynyň formulasy:\
  GPE = m ⋅ g ⋅ h\
  m obýektiň massasyny aňladýar. g agyrlyk güýji sebäpli tizlenmäni aňladýar (Eartheriň ýüzünde takmynan 9,81 m / s 2 9.81m / s 2). ℎ h - obýektiň beýikligi ýa-da dik ýagdaýy.\
  2. Elastik potensial energiýa (EPE): Energiýanyň bu görnüşi çeşmeler ýaly elastik zatlaryň deformasiýasy bilen baglanyşykly. Elastik potensial energiýanyň formulasy:\
  EPE = 1 ⁄ 2 × k × x 2\
  k baharyň berkligini görkezýän baharyň üýtgewsizligini görkezýär. x baharyň deňagramlylyk ýagdaýyndan süýşmegi aňladýar\
  Energiýanyň bu görnüşlerine düşünmek, dürli fiziki ulgamlar bilen baglanyşykly energiýany hasaplamaga we seljermäge kömek edýär , \
   obýektleriň hereketi ýa-da belli bir konfigurasiýada saklanýan energiýa.",
    eles: "Elestiki çaknyşyk",
    physic:
      "Fizikada elastik çaknyşyk, hereketiň we kinetiki energiýanyň tygşytlanýan çaknyşygynyň bir görnüşidir. \
     Bu, çaknyşmazdan ozal ulgamyň umumy tizliginiň we umumy kinetik energiýasynyň, çaknyşykdan \
      soň umumy tizlige we umumy kinetiki energiýa deňdigini aňladýar.",
    total: ". Jemi hereket saklanýar:",
    moment:
      "Ulgamyň çaknyşmazdan ozal umumy tizligi (ähli obýektleriň pursatlarynyň jemi) çaknyşykdan soňky umumy tizlige deňdir.\
    Matematiki taýdan bu şeýle aňladylýar:",
    masse:
      "•	 (m _1 ) we  (m_2 ) gatnaşýan obýektleriň massasy,\
    •	 (v _ {1i} ) we  (v_ {2i} ) obýektleriň başlangyç tizlikleri,\
    •	 (v _ {1f} ) we  (v_ {2f} ) obýektleriň soňky tizlikleridir.",
    kine: "2. Jemi kinetiki energiýa tygşytlanýar:",
    ener: "Çaknyşykdan öň ulgamyň umumy kinetiki energiýasy, çaknyşykdan soň umumy kinetiki energiýa deňdir.Matematiki taýdan bu şeýle aňladylýar:",
    wher: "Bu ýerde adalgalar çaknyşmazdan ozal we soň obýektleriň kinetik energiýasyny aňladýar.",
    colli:
      "Elastik çaknyşykda obýektler kinetiki energiýany beýleki görnüşlere (ýylylyk, ses ýa-da deformasiýa ýaly) ýitirmezden biri-birinden bökýärler. \
       Elastik çaknyşyklara mysal hökmünde stoluň üstündäki bilýard toplarynyň ýa-da ideal şertlerde gaz molekulalarynyň arasyndaky çaknyşyklar degişlidir.\
       Mehaniki energiýa, hereketi we ýagdaýy sebäpli bir jisimiň eýe bolan umumy energiýasyny aňladýar. Bu ulgamdaky kinetiki energiýanyň (KE) \
       we potensial energiýanyň (PE) jemi. Daşarky güýçler işlemän ýapyk ulgamda umumy mehaniki energiýa hemişelik bolýar. Bu ýörelge \
       mehaniki energiýany tygşytlamak hökmünde bellidir. Mehaniki energiýanyň (ME) formulasy: \
       Kinetiki energiýa (KE): Hereketi sebäpli bir jisimiň eýeçiligindäki energiýa. Kinetiki energiýanyň formulasy:",
    poten:
      "Bu yerde: m obýektiň massasyny aňladýar.\
    v obýektiň tizligi.\
    Potensial energiýa (PE): ýagdaýy ýa-da konfigurasiýasy sebäpli bir obýektde saklanýan energiýa. Ine iki umumy görnüş:\
    1. Grawitasiýa potensial energiýasy (GPE): Bir obýektiň salgylanma nokadyna görä köplenç Eartheriň üstki ýagdaýy \
    bilen baglanyşykly. Grawitasiýa potensial energiýasynyň formulasy:",
    deno: "m obýektiň massasyny aňladýar. g agyrlyk güýji sebäpli tizlenmäni aňladýar (Eartheriň ýüzünde takmynan 9,81 m / s 2 9.81m / s 2). ℎ h - obýektiň beýikligi ýa-da dik ýagdaýy.\
    2. Elastik potensial energiýa (EPE): Energiýanyň bu görnüşi çeşmeler ýaly elastik zatlaryň deformasiýasy bilen baglanyşykly. Elastik potensial energiýanyň formulasy:\
    k baharyň berkligini görkezýän baharyň üýtgewsizligini görkezýär. x baharyň deňagramlylyk ýagdaýyndan süýşmegi aňladýar",
    funda:
      "Elektrik zarýadlary materiýanyň esasy aýratynlyklarydyr. Iki görnüşli töleg bar: polo positiveitel we otrisatel. Zarýadlar biri-birini yza çekýär we ters tölegler biri-birini özüne çekýär.\
    Elektrik meýdany, zarýadly obýektiň töweregindäki sebit bolup, başga bir zarýadly obýekt güýç duýýar. Elektrik meýdanynyň ugry, meýdana ýerleşdirilse polo positiveitel synag zarýadynyň başdan geçirjek güýjüniň ugrudyr.",
    charg: "Elektrik zarýadlary we meýdanlar",
    fiel: "Elektrik meýdanynyň intensiwligi formulasy",
    inten:
      "N nokat zarýady sebäpli nokatda elektrik meýdanynyň intensiwligi (E):\
    •	E, her kulomb (N / C) düwmelerinde elektrik meýdanynyň intensiwligi.\
    •	k Coulomb-yň hemişelik, takmynan 8,99 x 10 ^ 9 N m ^ 2 / C ^ 2.\
    •	| S | nokatlardaky zarýadyň ululygydyr (C).\
    •	r nokat zarýadyndan meýdanyň metr (m) bilen ölçelýän ýerine çenli aralykdyr.",
    line: "Elektrik meýdan çyzyklary",
    imagi:
      "Elektrik meýdan çyzyklary zarýadly obýektiň töweregindäki dürli nokatlarda elektrik meýdanynyň ugruny görkezýän hyýaly çyzyklardyr. Setirleriň dykyzlygy meýdanyň berkligini görkezýär, has köp setir has güýçli meýdany görkezýär.",
    laws: "Coulomb kanuny",
    desc: "Coulomb kanuny zarýadly bölejikleriň arasyndaky elektrostatik täsirini suratlandyrýar. Iki nokat zarýadynyň arasyndaky elektrostatik güýjüň (F ) ululygynyň zarýadlaryň ululygynyň önümine gönüden-göni proporsionaldygyny we olaryň arasyndaky aralyk kwadratyna ters proporsionaldygyny aýdýar .\
    Coulomb kanunynyň matematiki aňlatmasy:",
    magni:
      "•	 (F ) zarýadlaryň arasyndaky elektrostatik güýjüň ululygy,\
    •	 (k ) Coulomb-yň hemişelikidir ( (8.9875  gezek 10 ^ 9 ) N ⋅ m² / C²),\
    •	 (q _1 ) we  (q_2 ) zarýadlaryň ululygydyr,\
    •	 (r ) tölegleriň arasyndaky aralyk.\
    Bu kanun, zarýadly bölejikleriň biri-biri bilen nähili täsirleşýändigine düşünmäge kömek edýär. Elektromagnitizmde esasy ýörelge bolup, ylym we in engineeringenerçiligiň dürli ugurlarynda ulanylýar.",
    motion: "Baharyň we köpçülikleýin hereket",

    attac:
      "Bir çeşmä berkidilen massanyň hereketi ýönekeý garmoniki hereketiň (SHM) nusgawy mysalydyr. Haçan-da massa  (m ) baharyň hemişelik  (k ) çeşmesine birikdirilende, çeşme Hookyň kanuny bilen berlen massa güýç berýär:",
    equation:
      "Köpçülikleýin bahar ulgamy üçin hereket deňlemesi Nýutonyň ikinji kanuny bilen berilýär:\
    Bu diferensial deňlemäniň formanyň çözgütleri bar:",
    mod: "bu ýerde  (A ) yrgyldamanyň amplitudasy,  ( omega =  sqrt { frac {k} {m}} ) yrgyldamanyň burç ýygylygy, we  ( phi ) faza burç. Yrgyldama döwri:",
    sprin:
      "Bir çeşmä berkidilen massanyň hereketi, titrän jisimdäki massanyň hereketi, maýatnik hereketi we kristal panjaradaky atomlaryň hereketi ýaly köp sanly hakyky hadysalary modellemek üçin ulanylýar.",
    techn: "Oguzhan Adyndaky Inzener Tehnologiýalar Uniwersiteti",
    pro: "Çekiş hereketi",
    mener: "Mehaniki energiýa",
  },
};

function changeLanguage(langCode) {
  document.getElementById("heading").textContent =
    translations[langCode].heading;
  document.getElementById("hok").textContent = translations[langCode].hok;
  document.getElementById("content").textContent =
    translations[langCode].content;
  document.getElementById("buYerde").textContent =
    translations[langCode].buYerde;
  document.getElementById("formula").textContent =
    translations[langCode].formula;
  document.getElementById("thes").textContent = translations[langCode].thes;
  translations[langCode].formula;
  document.getElementById("trajectory").textContent =
    translations[langCode].trajectory;
  document.getElementById("themotion").textContent =
    translations[langCode].themotion;
  document.getElementById("forms").textContent = translations[langCode].forms;
  translations[langCode].themotion;
  document.getElementById("grav").textContent = translations[langCode].grav;
  translations[langCode].themotion;
  document.getElementById("maxh").textContent = translations[langCode].maxh;
  translations[langCode].themotion;
  document.getElementById("flights").textContent =
    translations[langCode].flights;
  document.getElementById("ranges").textContent = translations[langCode].ranges;
  document.getElementById("hor").textContent = translations[langCode].hor;
  document.getElementById("comp").textContent = translations[langCode].comp;
  document.getElementById("comps").textContent = translations[langCode].comps;
  document.getElementById("compsa").textContent = translations[langCode].compsa;
  document.getElementById("tran").textContent = translations[langCode].tran;
  document.getElementById("hooks").textContent = translations[langCode].hooks;
  document.getElementById("forca").textContent = translations[langCode].forca;
  document.getElementById("mechan").textContent = translations[langCode].mechan;
  document.getElementById("repre").textContent = translations[langCode].repre;
  document.getElementById("eles").textContent = translations[langCode].eles;
  document.getElementById("physic").textContent = translations[langCode].physic;
  document.getElementById("total").textContent = translations[langCode].total;
  document.getElementById("moment").textContent = translations[langCode].moment;
  document.getElementById("masse").textContent = translations[langCode].masse;
  document.getElementById("kine").textContent = translations[langCode].kine;
  document.getElementById("ener").textContent = translations[langCode].ener;
  document.getElementById("wher").textContent = translations[langCode].wher;
  document.getElementById("colli").textContent = translations[langCode].colli;
  document.getElementById("poten").textContent = translations[langCode].poten;
  document.getElementById("funda").textContent = translations[langCode].funda;
  document.getElementById("charg").textContent = translations[langCode].charg;
  document.getElementById("fiel").textContent = translations[langCode].fiel;
  document.getElementById("inten").textContent = translations[langCode].inten;
  document.getElementById("line").textContent = translations[langCode].line;
  document.getElementById("imagi").textContent = translations[langCode].imagi;
  document.getElementById("laws").textContent = translations[langCode].laws;
  document.getElementById("desc").textContent = translations[langCode].desc;
  document.getElementById("magni").textContent = translations[langCode].magni;
  document.getElementById("motion").textContent = translations[langCode].motion;
  document.getElementById("attac").textContent = translations[langCode].attac;
  document.getElementById("equation").textContent =
    translations[langCode].equation;
  document.getElementById("mod").textContent = translations[langCode].mod;
  document.getElementById("mener").textContent = translations[langCode].mener;

  document.getElementById("sprin").textContent = translations[langCode].sprin;
  document.getElementById("techn").textContent = translations[langCode].techn;
  document.getElementById("pro").textContent = translations[langCode].pro;

  localStorage.setItem("selectedLanguage", langCode);
}

const languageButtons = document.querySelectorAll(".lang");
languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const langCode = button.dataset.lang;
    changeLanguage(langCode);
  });
});

const preferredLanguage = localStorage.getItem("selectedLanguage");
if (preferredLanguage) {
  changeLanguage(preferredLanguage);
}
