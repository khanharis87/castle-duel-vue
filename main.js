new Vue({   
    name: 'game',
    el: '#app',
    template: `<div id="#app" :class="cssClass">
        <top-bar :turn="turn" :current-player-index="currentPlayerIndex" :players="players" />
        <transition name="hand">
            <hand :cards="testHand" v-if="!activeOverlay" @card-play="testPlayCard" />
        </transition>    
        </div>`,
    data: state,
    methods: {
        handlePlay (color, number) {
            console.log('handle play event', 'color=', color, 'number=', number)
        },
        testPlayCard (card) {
            console.log('click')
            // remove the card from player
            const index = this.testHand.indexOf(card)
            this.testHand.splice(index, 1)
        },
        testDrawCard () {
            //choose a card at random with the ids
            const ids = Object.keys(cards)
            const randomId = ids[Math.floor(Math.random() * ids.length)]
            //return a new card with this defination
            return {
                uid: cardUid++,
                //Id of the defination
                id: randomId,
                //defination object
                def: cards[randomId]

            }
        },
        createTestHand () {
            const cards = []
            const ids = Object.keys(cards)

            //Draw 5 cards
            for (let i = 0; i < 5; i++) {
                cards.push(this.testDrawCard())
            }
            
            return cards
        }
    },
    computed: {
        cssClass () {
            return {
                'can-play': this.canPlay
            }
        },
        testCard () {
            return cards.archers
        }
    },
    created() {
        this.testHand =  this.createTestHand()
    }
}),
window.addEventListener('resize', () => {
    state.worldRatio = getWorldRatio()
})