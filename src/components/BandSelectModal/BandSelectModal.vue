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
        // initialValue: '',
      }
    },
    computed: {
      bands() {
      return [ 
          { name: '', id: '' },
          { name: 'A', id: 'a' },
          { name: 'A Day To Remember', id: 'adtr' },
          { name: 'AFI', id: 'afi' },
          { name: 'Against Me!', id: 'againstme' },
          { name: 'Alexisonfire', id: 'alexisonfire' },
          { name: 'Alien Weaponry', id: 'alienweaponry' },
          { name: 'Alkaline Trio', id: 'alkalinetrio' },
          { name: 'All Time Low', id: 'alltimelow' },
          { name: 'Andrew WK', id: 'andrewwk' },
          { name: 'Angels & Airwaves', id: 'ava' },
          { name: 'Architects', id: 'architects' },
          { name: 'Avril Lavigne', id: 'avril' },
          { name: 'Bad Omens', id: 'badomens' },
          { name: 'Bad Religion', id: 'badreligion' },
          { name: 'Beartooth', id: 'beartooth' },
          { name: 'Better Lovers', id: 'betterlovers' },
          { name: 'Biffy Clyro', id: 'biffyclyro' },
          { name: 'Billy Talent', id: 'billytalent' },
          { name: 'Blink 182', id: 'blink182' },
          { name: 'Blossoms', id: 'blossoms' },
          { name: 'Boston Manor', id: 'bostonmanor' },
          { name: 'Bowling For Soup', id: 'bfs' },
          { name: 'Bullet For My Valentine', id: 'bfmv' },
          { name: 'Bury Tomorrow', id: 'burytomorrow' },
          { name: 'Busted', id: 'busted' },
          { name: 'Cancer Bats', id: 'cancerbats' },
          { name: 'Carpenter Brut', id: 'carpenterbrut' },
          { name: 'The Chats', id: 'thechats' },
          { name: 'Chvrches', id: 'chvrches' },
          { name: 'CKY', id: 'cky' },
          { name: 'Code Orange', id: 'codeorange' },
          { name: 'Coheed & Cambria', id: 'candc' },
          { name: 'Creeper', id: 'creeper' },
          { name: 'Crosses', id: 'crosses' },
          { name: 'Dadi  Freyr', id: 'dadifreyr' },
          { name: 'The Darkness', id: 'thedarkness' },
          { name: 'Deftones', id: 'deftones' },
          { name: 'Dirty Loops', id: 'dirtyloops' },
          { name: 'The Distillers', id: 'thedistillers' },
          { name: 'Don Broco', id: 'donbroco' },
          { name: 'Dropkick Murphys', id: 'dropkickmurphys' },
          { name: 'Electric Callboy', id: 'electriccallboy' },
          { name: 'Enter Shikari', id: 'entershikari' },
          { name: 'Every Time I Die', id: 'etid' },
        //   { name: 'Faith No More', id: 'fnm' },
          { name: 'Fall Out Boy', id: 'fob' },
          { name: 'Falling in Reverse', id: 'fallinginreverse' },
        //   { name: 'Fear Factory', id: 'fearfactory' },
          { name: 'Feeder', id: 'feeder' },   
          { name: 'Fightstar', id: 'fightstar' },
          { name: 'Foals', id: 'foals' },
          { name: 'Fontaines DC', id: 'fontainesdc' },
          { name: 'Frank Carter & The Rattlesnakes', id: 'fcandtherattlesnakes' },
          { name: 'Frank Turner', id: 'frankturner' },
          { name: 'Fugazi', id: 'fugazi' },
          { name: 'Funeral For A Friend', id: 'ffaf' },
          { name: 'The Gaslight Anthem', id: 'thegaslightanthem' },
          { name: 'The Ghost Inside', id: 'theghostinside' },
          { name: 'Ghostwriters', id: 'ghostwriters' },
          { name: 'Gogol Bordello', id: 'gogolbordello' },
        //   { name: 'Good Charlotte', id: 'goodcharlotte' },
          { name: 'Hatebreed', id: 'hatebreed' },
          { name: 'Heck', id: 'heck' },
          { name: 'The Hives', id: 'thehives' },
          { name: 'Holding Absence', id: 'holdingabsence' },
          { name: 'Hollywood Undead', id: 'hollywoodundead' },
          { name: 'Ho99o9', id: 'ho99o9' },
          { name: 'The Hunna', id: 'thehunna' },
          { name: 'I Prevail', id: 'iprevail' },
          { name: 'Idles', id: 'idles' },
          { name: 'Insane Clown Posse', id: 'icp' },
          { name: 'InMe', id: 'inme' },
          { name: 'Incubus', id: 'incubus' },
          { name: 'The Interrupters', id: 'interrupters' },
          { name: 'Janes Addiction', id: 'janesaddiction' },
          { name: 'Jawbreaker', id: 'jawbreaker' },
          { name: 'Jimmy Eat World', id: 'jew' },
          { name: 'Kid Kapichi', id: 'kidkapichi' },
          { name: 'Knocked Loose', id: 'knockedloose' },
        //   { name: 'Less Than Jake', id: 'ltj' },
          { name: 'Letlive', id: 'letlive' },
          { name: 'Limp Bizkit', id: 'limpbizkit' },
          { name: 'Loathe', id: 'loathe' },
          { name: 'Malevolence', id: 'malevolence' },
          { name: 'Manchester Orchestra', id: 'manorchestra' },
          { name: 'Marmozets', id: 'marmozets' },
          { name: 'The Mars Volta', id: 'themarsvolta' },
          { name: 'The Menzingers', id: 'menzingers' },
          { name: 'Monuments', id:  'monuments' },
          { name: 'Mr Bungle', id: 'mrbungle' },
          { name: 'Municipal Waste', id: 'municipalwaste' },
          { name: 'Neck Deep', id: 'neckdeep' },
          { name: 'Nothing, Nowhere', id: 'nothingnowhere' },
          { name: 'Nova Twins', id: 'novatwins' },
          { name: 'The Offspring', id: 'theoffspring' },
          { name: 'Palaye Royale', id: 'palayeroyale' },
          { name: 'Pale Waves', id: 'palewaves' },
          { name: 'Papa Roach', id: 'paparoach' },
        //   { name: 'Paramore', id: 'paramore' },
        //   { name: 'Pendulum', id: 'pendulum' },
          { name: 'Pierce The Veil', id: 'piercetheveil' },
          { name: 'Placebo', id: 'placebo' },
          { name: 'Polyphia', id: 'polyphia' },
          { name: 'Primus', id: 'primus' },
          { name: 'Raging Speedhorn', id: 'ragingspeedhorn' },
          { name: 'Rancid', id: 'rancid' },
          { name: 'Refused', id: 'refused' },
          { name: 'Rise Against', id: 'riseagainst' },
          { name: 'Royal Blood', id: 'royalblood' },
          { name: 'Sick Of It All', id: 'soia' },
          { name: 'Sikth', id: 'sikth' },
          { name: 'Skindred', id: 'skindred' },
          { name: 'Sleep Token', id: 'sleeptoken' },
          { name: 'Sleeping With Sirens', id: 'sws' },
          { name: 'Spiritbox', id: 'spiritbox' },
          { name: 'Static Dress', id: 'staticdress' },
          { name: 'The Story So Far', id: 'tssf' },
          { name: 'Stray From The Path', id: 'sftp' },
          { name: 'Suicidal Tendencies', id: 'suicidaltendencies' },
          { name: 'Suicide Boys', id: 'suicideboys' },
          { name: 'Sylosis', id: 'sylosis' },
          { name: 'Therapy', id: 'therapy' },
          { name: 'Thrice', id: 'thrice' },
          { name: 'Trophy Eyes', id: 'trophyeyes' },
          { name: 'Turnstile', id: 'turnstile' },
          { name: 'Twin Temple', id: 'twintemple' },
          { name: 'The Used', id: 'theused' },
          { name: 'Wage War', id: 'wagewar' },
          { name: 'Wargasm', id: 'wargasm' },
          { name: 'Weezer', id: 'weezer' },
        //   { name: 'Wet Leg', id: 'wetleg' },
          { name: 'While She Sleeps', id: 'wss' },
          { name: 'The Wildhearts', id: 'wildhearts' },
          { name: 'Wolf Alice', id: 'wolfalice' },
          { name: 'YouMeAtSix', id: 'yma6' },
          { name: 'Yungblud', id: 'yungblud' },
          { name: 'Zebrahead', id: 'zebrahead' },
          { name: '100 Gecs', id: 'gecs' },
          // modest mouse / bloc party / rival schools / hundred reasons / hifh / soft play
          // twin atlantic / basement / touche amore / twin atlantic / the xcerts / bronx
          // head automatica / gouge away / bokassa / alt blk era / make them suffer
          // speed / lowlives / alien ant farm / blood command / dinosaur pile-up
          // gel / glassjaw / green lung / high vis / idlewild / hot mulligan / militarie gun
          // moon tooth / mother mother / new found glory / pennywise / puppy / scowl
        ]
      },
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