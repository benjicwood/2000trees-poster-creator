<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          Select your {{ title }}
        </slot>
        <button
          type="button"
          class="btn-close"
          @click="close"
        >
          x
        </button>
      </header>

      <section class="modal-body">
        <slot name="body">
          Search for band...
          <SearchDropdown
            :options="bands"
            v-on:selected="onSelectedOption($event)"
            placeholder="Start typing band name"
          >
          </SearchDropdown>
        </slot>
       </section>

        <button
          type="button"
          class="btn-red"
          @click="close"
        >
          Close Modal
        </button>
    </div>
  </div>
</template>

<script>
  // import SearchDropdown from 'search-dropdown-vue'
  import SearchDropdown from './SearchDropdown.vue'


  export default {
    name: 'BandSelectModal',
    props: {
        title: String,
        id: String,
    },
    components: {
      SearchDropdown,
    },
    data() {
      return {
      bands: [ 
          { name: '', id: '' },
          { name: 'A', id: 'a' },
          { name: 'A Day To Remember', id: 'adtr' },
          { name: 'AFI', id: 'afi' },
          { name: 'Against Me!', id: 'againstme' },
          { name: 'Against The Current', id: 'againstthecurrent' },
          { name: 'Alexisonfire', id: 'alexisonfire' },
          { name: 'Alien Ant Farm', id: 'aaf' },
          { name: 'Alien Weaponry', id: 'alienweaponry' },
          { name: 'Alkaline Trio', id: 'alkalinetrio' },
          { name: 'The All-American Rejects', id: 'aar' },
          { name: 'All Time Low', id: 'alltimelow' },
          { name: 'Alt Blk Era', id: 'altblkera' },
          { name: 'American Football', id: 'americanfootball' },
          { name: 'Amyl and the Sniffers', id: 'aats' },
          { name: 'And So I Watch You From Afar', id: 'asiwyfa' },
          { name: 'Andrew WK', id: 'andrewwk' },
          { name: 'Angels & Airwaves', id: 'ava' },
          { name: 'Architects', id: 'architects' },
          { name: 'Avril Lavigne', id: 'avril' },
          { name: 'Bad Omens', id: 'badomens' },
          { name: 'Bad Religion', id: 'badreligion' },
          { name: 'Band-Maid', id: 'bandmaid' },
          { name: 'Basement', id: 'basement' },
          { name: 'Beartooth', id: 'beartooth' },
          { name: 'Better Lovers', id: 'betterlovers' },
          { name: 'Biffy Clyro', id: 'biffyclyro' },
          { name: 'Billy Talent', id: 'billytalent' },
          { name: 'The Blackout', id: 'theblackout' },
          { name: 'Blink 182', id: 'blink182' },
          { name: 'Bloc Party', id: 'blocparty' },
          { name: 'Blood Command', id: 'bloodcommand' },
          { name: 'Blossoms', id: 'blossoms' },
          { name: 'Bokassa', id: 'bokassa' },
          { name: 'Boston Manor', id: 'bostonmanor' },
          { name: 'Bowling For Soup', id: 'bfs' },
          { name: 'The Bronx', id: 'bronx' },
          { name: 'Bullet For My Valentine', id: 'bfmv' },
          { name: 'Bury Tomorrow', id: 'burytomorrow' },
          { name: 'Busted', id: 'busted' },
          { name: 'The Callous Daoboys', id: 'callousdaoboys' },
          { name: 'Cancer Bats', id: 'cancerbats' },
          { name: 'Carpenter Brut', id: 'carpenterbrut' },
          { name: 'Charlotte Sands', id: 'charlottesands' },
          { name: 'The Chats', id: 'thechats' },
          { name: 'Chvrches', id: 'chvrches' },
          { name: 'Citizen', id: 'citizen' },
          { name: 'City and Colour', id: 'cityandcolour' },
          { name: 'CKY', id: 'cky' },
          { name: 'Code Orange', id: 'codeorange' },
          { name: 'Coheed & Cambria', id: 'candc' },
          { name: 'Creeper', id: 'creeper' },
          { name: 'Crosses', id: 'crosses' },
          { name: 'Dadi  Freyr', id: 'dadifreyr' },
          { name: 'The Darkness', id: 'thedarkness' },
          { name: 'Deathbyromy', id: 'deathbyromy' },
          { name: 'Death Cab For Cutie', id: 'dcfc' },
          { name: 'Deftones', id: 'deftones' },
          { name: 'Destroy Boys', id: 'destroyboys' },
          { name: 'Dinosaur Pile-Up', id: 'dinosaurpileup' },
          { name: 'Dirty Loops', id: 'dirtyloops' },
          { name: 'The Distillers', id: 'thedistillers' },
          { name: 'Don Broco', id: 'donbroco' },
          { name: 'Dropkick Murphys', id: 'dropkickmurphys' },
          { name: 'Drug Church', id: 'drugchurch' },
          { name: 'Electric Callboy', id: 'electriccallboy' },
          { name: 'Empire State Bastard', id: 'esb' },
          { name: 'Enter Shikari', id: 'entershikari' },
          { name: 'Every Time I Die', id: 'etid' },
          { name: 'Faith No More', id: 'fnm' },
          { name: 'Fall Out Boy', id: 'fob' },
          { name: 'Falling in Reverse', id: 'fallinginreverse' },
          { name: 'Fear Factory', id: 'fearfactory' },
          { name: 'Feeder', id: 'feeder' },   
          { name: 'Fightstar', id: 'fightstar' },
          { name: 'Foals', id: 'foals' },
          { name: 'Fontaines DC', id: 'fontainesdc' },
          { name: 'Frank Carter & The Rattlesnakes', id: 'fcandtherattlesnakes' },
          { name: 'Frank Turner', id: 'frankturner' },
          { name: 'Fugazi', id: 'fugazi' },
          { name: 'Funeral For A Friend', id: 'ffaf' },
          { name: 'Gallows', id: 'gallows' },
          { name: 'The Gaslight Anthem', id: 'thegaslightanthem' },
          { name: 'Gel', id: 'gel' },
          { name: 'The Ghost Inside', id: 'theghostinside' },
          { name: 'Ghostwriters', id: 'ghostwriters' },
          { name: 'Gogol Bordello', id: 'gogolbordello' },
          { name: 'Good Charlotte', id: 'goodcharlotte' },
          { name: 'Gouge Away', id: 'gougeaway' },
          { name: 'Green Lung', id: 'greenlung' },
          { name: 'Hatebreed', id: 'hatebreed' },
          { name: 'Head Automatica', id: 'headautomatica' },
          { name: 'Heck', id: 'heck' },
          { name: 'Hell is for Heroes', id: 'hifh' },
          { name: 'High Vis', id: 'highvis' },
          { name: 'The Hives', id: 'thehives' },
          { name: 'Holding Absence', id: 'holdingabsence' },
          { name: 'Hollywood Undead', id: 'hollywoodundead' },
          { name: 'Ho99o9', id: 'ho99o9' },
          { name: 'Hot Milk', id: 'hotmilk' },
          { name: 'Hot Mulligan', id: 'hotmulligan' },
          { name: 'Hundred Reasons', id: 'hundredreasons' },
          { name: 'The Hunna', id: 'thehunna' },
          { name: 'I Prevail', id: 'iprevail' },
          { name: 'Idles', id: 'idles' },
          { name: 'Idlewild', id: 'idlewild' },
          { name: 'Insane Clown Posse', id: 'icp' },
          { name: 'InMe', id: 'inme' },
          { name: 'Incubus', id: 'incubus' },
          { name: 'The Interrupters', id: 'interrupters' },
          { name: 'Ithaca', id: 'ithaca' },
          { name: 'Janes Addiction', id: 'janesaddiction' },
          { name: 'Jawbreaker', id: 'jawbreaker' },
          { name: 'Jimmy Eat World', id: 'jew' },
          { name: 'Joey Valence and Brae', id: 'jvb' },
          { name: 'Kid Kapichi', id: 'kidkapichi' },
          { name: 'Kids in Glass Houses', id: 'kigh' },
          { name: 'Knocked Loose', id: 'knockedloose' },
          { name: 'Less Than Jake', id: 'ltj' },
          { name: 'Letlive', id: 'letlive' },
          { name: 'Limp Bizkit', id: 'limpbizkit' },
          { name: 'Loathe', id: 'loathe' },
          { name: 'Make Them Suffer', id: 'makethemsuffer' },
          { name: 'Malevolence', id: 'malevolence' },
          { name: 'Manchester Orchestra', id: 'manorchestra' },
          { name: 'Manic Street Preachers', id: 'msp' },
          { name: 'Marmozets', id: 'marmozets' },
          { name: 'The Mars Volta', id: 'themarsvolta' },
          { name: 'Maybeshewill', id: 'maybeshewill' },
          { name: 'The Menzingers', id: 'menzingers' },
          { name: 'Microwave', id: 'microwave' },
          { name: 'Militarie Gun', id: 'militariegun' },
          { name: 'Modern Baseball', id: 'modernbaseball' },
          { name: 'Modest Mouse', id: 'modestmouse' },
          { name: 'Monuments', id:  'monuments' },
          { name: 'Moon Tooth', id: 'moontooth' },
          { name: 'Mother Mother', id: 'mothermother' },
          { name: 'Motion City Soundtrack', id: 'mcsoundtrack' },
          { name: 'Mr Bungle', id: 'mrbungle' },
          { name: 'Municipal Waste', id: 'municipalwaste' },
          { name: 'Neck Deep', id: 'neckdeep' },
          { name: 'New Found Glory', id: 'nfg' },
          { name: 'Nothing, Nowhere', id: 'nothingnowhere' },
          { name: 'Nova Twins', id: 'novatwins' },
          { name: 'The Offspring', id: 'theoffspring' },
          { name: 'Palaye Royale', id: 'palayeroyale' },
          { name: 'Pale Waves', id: 'palewaves' },
          { name: 'Papa Roach', id: 'paparoach' },
          { name: 'Party Cannon', id: 'partycannon' },
          { name: 'Pierce The Veil', id: 'piercetheveil' },
          { name: 'Placebo', id: 'placebo' },
          { name: 'Polyphia', id: 'polyphia' },
          { name: 'The Postal Service', id: 'postalservice' },
          { name: 'Primus', id: 'primus' },
          { name: 'Pup', id: 'pup' },
          { name: 'Raging Speedhorn', id: 'ragingspeedhorn' },
          { name: 'Rancid', id: 'rancid' },
          { name: 'Refused', id: 'refused' },
          { name: 'Rise Against', id: 'riseagainst' },
          { name: 'Rival Schools', id: 'rivalschools' },
          { name: 'Rolo Tomassi', id: 'rolotomassi' },
          { name: 'Royal Blood', id: 'royalblood' },
          { name: 'Scowl', id: 'scowl' },
          { name: 'Sick Of It All', id: 'soia' },
          { name: 'Sikth', id: 'sikth' },
          { name: 'Skindred', id: 'skindred' },
          { name: 'The Skints', id: 'skints' },
          { name: 'Sleep Token', id: 'sleeptoken' },
          { name: 'Sleeping With Sirens', id: 'sws' },
          { name: 'Soft Play', id: 'softplay' },
          { name: 'Speed', id: 'speed' },
          { name: 'Spiritbox', id: 'spiritbox' },
          { name: 'Static Dress', id: 'staticdress' },
          { name: 'The Story So Far', id: 'tssf' },
          { name: 'Stray From The Path', id: 'sftp' },
          { name: 'The Streets', id: 'thestreets' },
          { name: 'Suicidal Tendencies', id: 'suicidaltendencies' },
          { name: 'Suicide Boys', id: 'suicideboys' },
          { name: 'Sylosis', id: 'sylosis' },
          { name: 'Therapy', id: 'therapy' },
          { name: 'Thrice', id: 'thrice' },
          { name: 'Thrown', id: 'thrown' },
          { name: 'Touche Amore', id: 'toucheamore' },
          { name: 'Trash Boat', id: 'trashboat' },
          { name: 'Trophy Eyes', id: 'trophyeyes' },
          { name: 'Turnstile', id: 'turnstile' },
          { name: 'Twin Atlantic', id: 'twinatlantic' },
          { name: 'Twin Temple', id: 'twintemple' },
          { name: 'Underoath', id: 'underoath' },
          { name: 'Unpeople', id: 'unpeople' },
          { name: 'The Used', id: 'theused' },
          { name: 'Wage War', id: 'wagewar' },
          { name: 'Wargasm', id: 'wargasm' },
          { name: 'Waterparks', id: 'waterparks' },
          { name: 'Weezer', id: 'weezer' },
          { name: 'While She Sleeps', id: 'wss' },
          { name: 'The Wildhearts', id: 'wildhearts' },
          { name: 'Wolf Alice', id: 'wolfalice' },
          { name: 'The Wonder Years', id: 'twy' },
          { name: 'WSTR', id: 'wstr' },
          { name: 'The Wytches', id: 'wytches' },
          { name: 'The Xcerts', id: 'xcerts' },
          { name: 'Yellowcard', id: 'yellowcard' },
          { name: 'YouMeAtSix', id: 'yma6' },
          { name: 'Yungblud', id: 'yungblud' },
          { name: 'Zand', id: 'zand' },
          { name: 'Zebrahead', id: 'zebrahead' },
          { name: '100 Gecs', id: 'gecs' },
        ]
      }
    },
    methods: {
      onSelectedOption(selected) {

       this.$emit('selected', selected)
    },
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    display: flex;
    flex-direction: column;
    width: 60%;
    max-width: 500px;
    font-family: 'PT Sans Narrow', sans-serif;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    background-color: #711214;
    color: white;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
  }

  .modal-body {
    padding: 10px;
    display: flex;
    flex-direction: column;
  }

  .modal-body .dropdown .dropdown-menu {
    width: 92%;
  }

  .modal-body .dropdown .dropdown-toggle {
    width: 95%;
  }

  .modal-body .dropdown .dropdown-toggle input {
    width: 100%;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-red {
    color: white;
    background: #711214;
    border: 1px solid #711214;
    padding: 10px;
    margin: 5px;
    border-radius: 6px;
    cursor: pointer;
  }
</style>