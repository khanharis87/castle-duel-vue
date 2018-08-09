Vue.component('top-bar', {
    template: `<div class="top-bar" :class="'player-' + currentPlayerIndex">
            <div class="player p0">{{ players[0].name }}</div>
            <div class="turn-counter">
            <img class="arrow" src="svg/turn.svg" />
            <div class="turn"> Turn {{ turn }}</div>
            </div>
            <div class="player p1">{{ players[1].name }}</div>
        </div>`,
    props: ['players', 'currentPlayerIndex', 'turn']
})

Vue.component('card', {
    props: ['def'],
    template: `<div class="card" :class="'type-' + def.type" @click="play">
        <div class="title">{{def.title}}</div>
        <img class="separator" src="svg/card-separator.svg" />
        <div class="description"><div v-html="def.description"></div></div>
        <div class="note" v-if="def.note"><div v-html="def.note"></div></div>
    </div>`,
    methods: {
        play () {
            console.log('hey')
            this.$emit('play')
        },
    }
})

Vue.component('hand', {
    props: ['cards'],
    template: `<div class="hand">
        <div class="wrapper">
            <transition-group name="card" tag="div" class="cards">
                <card v-for="card in cards" :key="card.uid" :def="card.def" @play="handlePlay(card)" />
            </transition-group>
        </div>
    </div>`,
    methods: {
        handlePlay (card) {
            console.log('ola')
            this.$emit('card-play', card)
        }
    },
    activated: function(){
        console.log('activated', this._inactive, this.cards)
    },
    mounted () {
        console.log('mounted', this._inactive)
    }
})