<script lang="ts" setup>
import { usePortfolioStore } from '@/Stores/index.ts';

const portfolioStore = usePortfolioStore();
</script>

<template>
    <div
        id="retrobg"
        class="min-h-screen"
    >
        <div id="retrobg-sky">
            <div id="retrobg-stars">
                <div
                    class="retrobg-star"
                    style="left: 5%; top: 55%; transform: scale(2)"
                ></div>
                <div
                    class="retrobg-star"
                    style="left: 7%; top: 5%; transform: scale(2)"
                ></div>
                <div
                    class="retrobg-star"
                    style="left: 10%; top: 45%; transform: scale(1)"
                ></div>
                <div
                    class="retrobg-star"
                    style="left: 12%; top: 35%; transform: scale(1)"
                ></div>
                <div
                    class="retrobg-star"
                    style="left: 15%; top: 39%; transform: scale(1)"
                ></div>
                <div
                    class="retrobg-star"
                    style="left: 20%; top: 10%; transform: scale(1)"
                ></div>
                <div
                    class="retrobg-star"
                    style="left: 35%; top: 50%; transform: scale(2)"
                ></div>
                <div
                    class="retrobg-star"
                    style="left: 40%; top: 16%; transform: scale(2)"
                ></div>
                <div
                    class="retrobg-star"
                    style="left: 43%; top: 28%; transform: scale(1)"
                ></div>
                <div
                    class="retrobg-star"
                    style="left: 45%; top: 30%; transform: scale(3)"
                ></div>
                <div
                    class="retrobg-star"
                    style="left: 55%; top: 18%; transform: scale(1)"
                ></div>
                <div
                    class="retrobg-star"
                    style="left: 60%; top: 23%; transform: scale(1)"
                ></div>
                <div
                    class="retrobg-star"
                    style="left: 62%; top: 44%; transform: scale(2)"
                ></div>
                <div
                    class="retrobg-star"
                    style="left: 67%; top: 27%; transform: scale(1)"
                ></div>
                <div
                    class="retrobg-star"
                    style="left: 75%; top: 10%; transform: scale(2)"
                ></div>
                <div
                    class="retrobg-star"
                    style="left: 80%; top: 25%; transform: scale(1)"
                ></div>
                <div
                    class="retrobg-star"
                    style="left: 83%; top: 57%; transform: scale(1)"
                ></div>
                <div
                    class="retrobg-star"
                    style="left: 90%; top: 29%; transform: scale(2)"
                ></div>
                <div
                    class="retrobg-star"
                    style="left: 95%; top: 5%; transform: scale(1)"
                ></div>
                <div
                    class="retrobg-star"
                    style="left: 96%; top: 72%; transform: scale(1)"
                ></div>
                <div
                    class="retrobg-star"
                    style="left: 98%; top: 70%; transform: scale(3)"
                ></div>
            </div>
            <div id="retrobg-sunWrap">
                <div id="retrobg-sun"></div>
            </div>
            <div id="retrobg-mountains">
                <div
                    id="retrobg-mountains-left"
                    class="retrobg-mountain"
                ></div>
                <div
                    id="retrobg-mountains-right"
                    class="retrobg-mountain"
                ></div>
            </div>
            <div id="retrobg-cityWrap">
                <div id="retrobg-city">
                    <div
                        style="left: 4%; height: 20%; width: 3%"
                        class="retrobg-building"
                    ></div>
                    <div
                        style="left: 6%; height: 50%; width: 1.5%"
                        class="retrobg-building"
                    ></div>
                    <div
                        style="left: 8%; height: 25%; width: 4%"
                        class="retrobg-building"
                    ></div>
                    <div
                        style="left: 12%; height: 30%; width: 3%"
                        class="retrobg-building"
                    ></div>
                    <div
                        style="left: 13%; height: 55%; width: 3%"
                        class="retrobg-building retrobg-antenna"
                    ></div>
                    <div
                        style="left: 17%; height: 20%; width: 4%"
                        class="retrobg-building"
                    ></div>
                    <div
                        style="left: 18.5%; height: 70%; width: 1.5%"
                        class="retrobg-building"
                    ></div>
                    <div
                        style="left: 20%; height: 30%; width: 4%"
                        class="retrobg-building"
                    ></div>
                    <div
                        style="left: 21.5%; height: 80%; width: 2%"
                        class="retrobg-building retrobg-antenna"
                    ></div>
                    <div
                        style="left: 25%; height: 60%; width: 4%"
                        class="retrobg-building"
                    ></div>
                    <div
                        style="left: 28%; height: 40%; width: 4%"
                        class="retrobg-building"
                    ></div>
                    <div
                        style="left: 30%; height: 70%; width: 4%"
                        class="retrobg-building"
                    ></div>
                    <div
                        style="left: 35%; height: 65%; width: 4%"
                        class="retrobg-building retrobg-antenna"
                    ></div>
                    <div
                        style="left: 38%; height: 40%; width: 3%"
                        class="retrobg-building"
                    ></div>
                    <div
                        style="left: 42%; height: 60%; width: 2%"
                        class="retrobg-building"
                    ></div>
                    <div
                        style="left: 43%; height: 85%; width: 4%"
                        class="retrobg-building retrobg-antenna"
                    ></div>
                    <div
                        style="left: 45%; height: 40%; width: 3%"
                        class="retrobg-building"
                    ></div>
                    <div
                        style="left: 48%; height: 25%; width: 3%"
                        class="retrobg-building"
                    ></div>
                    <div
                        style="left: 50%; height: 80%; width: 4%"
                        class="retrobg-building"
                    ></div>
                    <div
                        style="left: 52%; height: 32%; width: 5%"
                        class="retrobg-building"
                    ></div>
                    <div
                        style="left: 55%; height: 55%; width: 3%"
                        class="retrobg-building retrobg-antenna"
                    ></div>
                    <div
                        style="left: 58%; height: 45%; width: 4%"
                        class="retrobg-building"
                    ></div>
                    <div
                        style="left: 61%; height: 90%; width: 4%"
                        class="retrobg-building"
                    ></div>
                    <div
                        style="left: 66%; height: 99%; width: 4%"
                        class="retrobg-building retrobg-antenna"
                    ></div>
                    <div
                        style="left: 69%; height: 30%; width: 4%"
                        class="retrobg-building"
                    ></div>
                    <div
                        style="left: 73.5%; height: 90%; width: 2%"
                        class="retrobg-building"
                    ></div>
                    <div
                        style="left: 72%; height: 70%; width: 4%"
                        class="retrobg-building"
                    ></div>
                    <div
                        style="left: 75%; height: 60%; width: 4%"
                        class="retrobg-building"
                    ></div>
                    <div
                        style="left: 80%; height: 40%; width: 4%"
                        class="retrobg-building"
                    ></div>
                    <div
                        style="left: 83%; height: 70%; width: 4%"
                        class="retrobg-building retrobg-antenna"
                    ></div>
                    <div
                        style="left: 87%; height: 60%; width: 3%"
                        class="retrobg-building retrobg-antenna"
                    ></div>
                    <div
                        style="left: 93%; height: 50%; width: 3%"
                        class="retrobg-building"
                    ></div>
                    <div
                        style="left: 91%; height: 30%; width: 4%"
                        class="retrobg-building"
                    ></div>
                    <div
                        style="left: 94%; height: 20%; width: 3%"
                        class="retrobg-building"
                    ></div>
                    <div
                        style="left: 98%; height: 35%; width: 2%"
                        class="retrobg-building"
                    ></div>
                </div>
            </div>
        </div>
        <div
            :class="`border-t border-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
            id="retrobg-ground"
        >
            <div id="retrobg-linesWrap">
                <div id="retrobg-lines">
                    <div id="retrobg-vlines">
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-vline"
                        ></div>
                    </div>
                    <div id="retrobg-hlines">
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-hline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-hline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-hline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-hline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-hline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-hline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-hline"
                        ></div>
                        <div
                            :class="`bg-${portfolioStore.primaryThemeColour}-${portfolioStore.primaryThemeColourShade}`"
                            class="retrobg-hline"
                        ></div>
                    </div>
                </div>
            </div>
            <div id="retrobg-groundShadow"></div>
        </div>
    </div>
</template>

<style>
/* ............................................................... */
/* ............................................................... */
/* ............................................................... */
#retrobg {
    position: relative;
    overflow: hidden;
    height: 100%;
    color: #a3c;
    background-color: #000;
}

/* ............................................................... */
#retrobg-sky {
    position: absolute;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    top: 0;
    width: 100%;
    height: 55%;
    background: linear-gradient(#214 75%, #249);
}

/* ............................................................... */
#retrobg-sunWrap {
    position: relative;
    width: 40%;
    margin-bottom: -15%;
}
#retrobg-sun {
    --glow-color: #d44;
    padding-top: 100%;
    border-radius: 50%;
    background-image: linear-gradient(#fcdf11, #ff623f, #fe2085 50%);
    box-shadow: 0 0 160px 80px var(--glow-color);
    animation: 2s ease infinite alternate retrobg-sun-glow-anim;
}
.retrobg-shutdown #retrobg-sun {
    background-image: linear-gradient(#000, #000 40%);
    --glow-color: #000;
}
@keyframes retrobg-sun-glow-anim {
    from {
        box-shadow: 0 0 160px 80px var(--glow-color);
    }
    to {
        box-shadow: 0 0 200px 95px var(--glow-color);
    }
}

/* ............................................................... */
#retrobg-stars {
    position: absolute;
    width: 100%;
    height: 100%;
}
.retrobg-star {
    position: absolute;
    border-radius: 50%;
    width: 2px;
    height: 2px;
    background-color: #fff;
}

/* ............................................................... */
#retrobg-mountains {
    position: absolute;
    width: 100%;
    height: 30%;
}
.retrobg-mountain {
    position: absolute;
    width: 30%;
    height: 100%;
    background-image: linear-gradient(#000 70%, #111 85%, #fff1);
}
#retrobg-mountains-left {
    left: 0;
    clip-path: polygon(
        0% 100%,
        0% 55%,
        5% 60%,
        10% 55%,
        20% 50%,
        25% 42%,
        30% 38%,
        33% 35%,
        40% 45%,
        50% 50%,
        60% 70%,
        70% 85%,
        75% 82%,
        80% 91%,
        85% 90%,
        90% 95%,
        95% 98%,
        100% 100%
    );
}
#retrobg-mountains-right {
    right: 0;
    clip-path: polygon(
        0% 100%,
        5% 95%,
        10% 85%,
        15% 87%,
        20% 80%,
        25% 78%,
        30% 65%,
        40% 70%,
        50% 57%,
        60% 53%,
        67% 68%,
        70% 70%,
        75% 66%,
        80% 55%,
        90% 50%,
        95% 60%,
        100% 57%,
        100% 100%
    );
}

/* ............................................................... */
#retrobg-cityWrap {
    position: absolute;
    width: 50%;
    margin-left: -1%;
}
#retrobg-city {
    padding-top: 20%;
}
.retrobg-building {
    position: absolute;
    width: 5%;
    height: 100%;
    bottom: 0;
    border-radius: 4px 4px 0 0;
    background-image: linear-gradient(0deg, rgba(17, 17, 34, 0), #112 30px, #000);
}
.retrobg-building:nth-child(odd) {
    background-image: linear-gradient(0deg, rgba(24, 24, 42, 0), #223 30px, #000);
}
.retrobg-antenna::after {
    content: '';
    position: absolute;
    left: 50%;
    margin-left: calc(-1px - 5%);
    bottom: 100%;
    width: 10%;
    min-width: 2px;
    height: 33%;
    background-color: #000;
}

/* ............................................................... */
#retrobg-ground {
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 45%;
    bottom: 0;
    background-color: #000;
}
.retrobg-shutdown #retrobg-ground {
    border-color: #000;
}
#retrobg-groundShadow {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(#000 0%, transparent);
}

/* ............................................................... */
#retrobg-linesWrap {
    height: 100%;
    perspective: 1000px;
    perspective-origin: center top;
}
#retrobg-lines {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-origin: top center;
    animation: 0.35s linear infinite retrobg-lines-anim;
}
.retrobg-shutdown #retrobg-lines {
    animation-duration: 5s;
}
@keyframes retrobg-lines-anim {
    from {
        transform: rotateX(84deg) translateY(0);
    }
    to {
        transform: rotateX(84deg) translateY(100px);
    }
}
#retrobg-hlines,
#retrobg-vlines {
    position: absolute;
    left: calc((900% - 100%) / -2);
    width: 900%;
    height: 500%;
}
#retrobg-vlines {
    display: flex;
    justify-content: center;
}
.retrobg-hline,
.retrobg-vline {
    width: 100%;
    height: 100%;
    background-color: currentColor;
}
.retrobg-hline {
    height: 3px;
}
.retrobg-vline {
    width: 3px;
}
.retrobg-hline + .retrobg-hline {
    margin-top: 98px;
}
.retrobg-vline + .retrobg-vline {
    margin-left: 48px;
}
</style>
