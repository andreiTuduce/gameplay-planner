"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[209],{1209:function(e,t,o){var l=o(37790),i=o(48932),a={findMultipliersWithMinPercentage:function(e,t,o){let l=[],i=0;function backtrack(a,n,r){if(i++,a===t.length){let i=r.reduce((e,o,l)=>e+o*t[l],0);i>=o*e&&l.push([...r]);return}let s=Math.floor((e-n)/t[a]);for(let o=0;o<=s;o++)r[a]=o,n+o*t[a]<e&&backtrack(a+1,n+o*t[a],r)}return backtrack(0,0,[]),console.log(i),l},calcGrowthTime:function(e,t){let o=i.Z.createDecimal(t.originalShopGrowingBonus);o=i.Z.divideDecimal(o,1+.05*t.originalShopGrowingLevel),o=i.Z.multiplyDecimal(o,1+.05*t.shopGrowingSpeed).toNumber();let l=Math.floor(e.TimeNeeded/e.prestigeBonus/o);return l<10?10:l},calcPlantHarvest:function(e,t){return l.Z.roundInt((1+e.Rank)*Math.pow(1.05,e.Rank))*Math.pow(1.02,e.prestige)*t.manualHarvestBonus},calcShopProdBonus:function(e,t){return t=t||0===t?t:e.FarmingShopPlantTotalProduction,i.Z.pow(1.25,t)},calcProdOutput:function(e,t){let o=e.totalMade,l=t.shopProdBonus,a=e.prestige,n=i.Z.createDecimal(t.originalShopProdBonus);n=i.Z.divideDecimal(n,this.calcShopProdBonus(null,t.originalShopProdLevel)),n=i.Z.multiplyDecimal(l,n);let r=e.futureMult,s=i.Z.multiplyDecimal(i.Z.multiplyDecimal(i.Z.multiplyDecimal(o,r),n),i.Z.createDecimal(Math.pow(1.02,a)));return 1===e.ID&&(s=i.Z.multiplyDecimal(s,t.hpBonus)),s},calcFryOutput:function(e,t){if(e.lessThan(1e16))return 0;let o=0,l=t.timePassed?t.timePassed:0;l>1800&&(o=l<86400?l/86400:1+(l-86400)/(172800+.5*(l-86400)));let a=i.Z.logDecimal(e,10),n=i.Z.subtractDecimal(a,15.75),r=a;r=r.lessThan(31)?r:31;let s=i.Z.subtractDecimal(36,r),c=i.Z.subtractDecimal(a,16),u=i.Z.pow(1.15,c),m=i.Z.multiplyDecimal(n,s),p=i.Z.multiplyDecimal(m,u),d=i.Z.createDecimal(t.fryBonus),h=i.Z.multiplyDecimal(p,d);return i.Z.multiplyDecimal(h,o)},calcCarryOverEXP_OLD:function(e){let{plant:t,numAutos:o,expTick:l}=e,i=0,a=1;if(o>1){let e=l/o,n=Math.ceil((t.reqExp-t.curExp)/e);if(o>n){i=(o-n)*e;let l=10+5*(t.Rank+a)*Math.pow(1.05,t.Rank+a);for(;i>l;)i-=l,a++,l=10+5*(t.Rank+a)*Math.pow(1.05,t.Rank+a)}else i=0}else i=0;let n=10+5*(t.Rank+a)*Math.pow(1.05,t.Rank+a);return{leftOver:i,numLevels:a,reqExp:n}},calcCarryOverEXP:function(e){let{plant:t,numAutos:o,expTick:l}=e,i=0,a=t.curExp+o*l,n=10+5*(t.Rank+i)*Math.pow(1.05,t.Rank+i);for(;a>=n;)a-=n,i++,n=10+5*(t.Rank+i)*Math.pow(1.05,t.Rank+i);return{leftOver:a,numLevels:i,reqExp:n}},calcEXPBonus:function(e){let t=e.originalRankLevelBonus,o=e.originalShopRankLevel,l=e.shopRankLevel,a=e.originalPotionRank,n=e.potionRank,r=i.Z.createDecimal(t);return r=i.Z.divideDecimal(r,1+.1*o),r=i.Z.divideDecimal(r,a>0?1.5:1),r=i.Z.multiplyDecimal(r,1+.1*l),r=(r=i.Z.multiplyDecimal(r,n)).toNumber()},futureMultBD:function(e,t){return i.Z.pow(1+.05*(1+.02*t.manualHarvestFormula),i.Z.logDecimal(e.created,1.25))},calcFutureMult:function(e,t){let o=!1===t.string?e:JSON.parse(JSON.stringify(e)),l=!1===t.string?t:JSON.parse(JSON.stringify(t)),a=l.time,n=l.numAuto||(null==l?void 0:l.numAuto)===0?l.numAuto:1,r=this.calcEXPBonus(l),s=o.prestigeBonus*r;if(o.growthTime=this.calcGrowthTime(o,l),0===n){let e=this.calcProdOutput(o,l);return o.production=e,o}for(;a>0;){o.timeToLevel=this.calcTimeTillLevel(o,l);let e=0,t=!1;o.timeToLevel>a?e=a:(e=o.timeToLevel,t=!0),a-=e,o.elapsedTime+=e;let r=0;if(o.elapsedTime>=o.growthTime){r=Math.floor(o.elapsedTime/o.growthTime);let e=o.perHarvest*r*n;if(o.created=i.Z.addDecimal(o.created,e),o.totalMade=i.Z.addDecimal(o.totalMade,e),o.futureMult=this.futureMultBD(o,l),t){let e=this.calcCarryOverEXP({plant:o,expTick:s*r,numAutos:n});o.curExp=e.leftOver,o.Rank+=e.numLevels,o.perHarvest=this.calcPlantHarvest(o,l),o.reqExp=e.reqExp}else{let e=r*s*n,t=o.curExp+e;o.curExp=t}o.elapsedTime=o.elapsedTime%o.growthTime}}let c=this.calcProdOutput(o,l);return o.production=c,o},calcTimeTillLevel:function(e,t){let o=t.numAuto||(null==t?void 0:t.numAuto)===0?t.numAuto:1;if(0===o)return 1/0;let l=e.reqExp-e.curExp,i=this.calcEXPBonus(t);return Math.ceil(l/(e.prestigeBonus*i*o))*e.growthTime-e.elapsedTime},getNextShopCosts:function(e){let t=1,o=e.FarmingShopPlantTotalProduction||0===e.FarmingShopPlantTotalProduction?e.FarmingShopPlantTotalProduction:e.shopProdLevel,l=1,a=e.FarmingShopPlantGrowingSpeed||0===e.FarmingShopPlantGrowingSpeed?e.FarmingShopPlantGrowingSpeed:e.shopGrowingSpeed,n=e.FarmingShopPlantRankExpEarned||0===e.FarmingShopPlantRankExpEarned?e.FarmingShopPlantRankExpEarned:e.shopRankLevel,r=i.Z.pow(1.05,o-50),s=i.Z.multiplyDecimal(100,r),c=i.Z.pow(s,o),u=i.Z.multiplyDecimal(1e8,c);return{prodCost:t=o>50?u:i.Z.multiplyDecimal(1e8,i.Z.pow(100,o)),growthCost:i.Z.multiplyDecimal(i.Z.pow(500,a),1e10),expCost:i.Z.multiplyDecimal(i.Z.pow(250,n),1e15)}},calcMaxPrestige:function(e){let t=e.prestige,o=0,l=!0;for(;l;){let i=10*Math.pow(2,t),a=o+i;e.created.greaterThanOrEqualTo(a)?(t++,o+=i):l=!1}return t-e.prestige},calcTimeTillPrestige:function(e,t){let o=JSON.parse(JSON.stringify(e));this.resetPlantBD(o);let l=JSON.parse(JSON.stringify(t));this.resetModifiersBD(l);let a=l.numAuto||(null==l?void 0:l.numAuto)===0?l.numAuto:1,n=!1,r=0,s=0,c=this.calcEXPBonus(l),u=o.prestigeBonus*c;for(;!n;){let e=this.calcTimeTillLevel(o,l),t=10*Math.pow(2,o.prestige),c=s+t,m=i.Z.subtractDecimal(c,o.created),p=i.Z.multiplyDecimal(i.Z.divideDecimal(m,o.perHarvest*a).ceil(),o.growthTime).ceil().toNumber();if(0===a&&m.greaterThan(0))n=!0,r=1/0;else if(p<=0)n=!0,r<=0&&(o.prestige++,n=!1,s+=t);else if(p>e){o.elapsedTime+=e;let t=Math.floor(o.elapsedTime/o.growthTime);o.created=i.Z.addDecimal(o.created,t*o.perHarvest*a),o.totalMade=i.Z.addDecimal(o.totalMade,t*o.perHarvest*a);let n=this.calcCarryOverEXP({plant:o,numAutos:a,expTick:u*t});o.Rank+=n.numLevels,o.curExp=n.leftOver,o.reqExp=n.reqExp,o.perHarvest=this.calcPlantHarvest(o,l),r+=e,o.elapsedTime=o.elapsedTime%o.growthTime}else{n=!0,o.elapsedTime+=p;let e=Math.floor(o.elapsedTime/o.growthTime);o.created=i.Z.addDecimal(o.created,e*o.perHarvest*a),o.totalMade=i.Z.addDecimal(o.totalMade,e*o.perHarvest*a),r+=p,o.elapsedTime=o.elapsedTime%o.growthTime}}return{remainingTime:r,prestige:o.prestige,prestiged:n}},resetPlantBD:function(e){var t,o,l,a,n,r;e.totalMade=(null==e?void 0:null===(t=e.totalMade)||void 0===t?void 0:t.mantissa)||(null==e?void 0:null===(o=e.totalMade)||void 0===o?void 0:o.mantissa)===0?e.totalMade:i.Z.createDecimal(e.totalMade),e.created=(null==e?void 0:null===(l=e.created)||void 0===l?void 0:l.mantissa)||(null==e?void 0:null===(a=e.created)||void 0===a?void 0:a.mantissa)===0?e.created:i.Z.createDecimal(e.created),e.production=(null==e?void 0:null===(n=e.production)||void 0===n?void 0:n.mantissa)||(null==e?void 0:null===(r=e.production)||void 0===r?void 0:r.mantissa)===0?e.production:i.Z.createDecimal(e.production),e.futureMult=i.Z.createDecimal(e.futureMult)},resetModifiersBD:function(e){var t,o,l,a,n,r,s;e.shopProdBonus=(null==e?void 0:null===(t=e.shopProdBonus)||void 0===t?void 0:t.mantissa)||(null==e?void 0:null===(o=e.shopProdBonus)||void 0===o?void 0:o.mantissa)===0?e.shopProdBonus:i.Z.createDecimal(e.shopProdBonus),e.hpBonus=(null==e?void 0:null===(l=e.hpBonus)||void 0===l?void 0:l.mantissa)||(null==e?void 0:null===(a=e.hpBonus)||void 0===a?void 0:a.mantissa)===0?e.hpBonus:i.Z.createDecimal(e.hpBonus),e.curPotatoes=(null==e?void 0:null===(n=e.curPotatoes)||void 0===n?void 0:n.mantissa)||(null==e?void 0:e.curPotatoes.mantissa)===0?e.curPotatoes:i.Z.createDecimal(e.curPotatoes),e.totalPotatoes=(null==e?void 0:null===(r=e.totalPotatoes)||void 0===r?void 0:r.mantissa)||(null==e?void 0:null===(s=e.totalPotatoes)||void 0===s?void 0:s.mantissa)===0?e.totalPotatoes:i.Z.createDecimal(e.totalPotatoes)},calcHPProd:function(e,t){let o=JSON.parse(JSON.stringify(e));for(let e=0;e<o.length;e++)this.resetPlantBD(o[e]);let n=JSON.parse(JSON.stringify(t));this.resetModifiersBD(n),n.nextCosts.prodCost=i.Z.createDecimal(n.nextCosts.prodCost),n.nextCosts.growthCost=i.Z.createDecimal(n.nextCosts.growthCost),n.nextCosts.expCost=i.Z.createDecimal(n.nextCosts.expCost);let r=n.numAutos,s=n.time,c=n.startTime?n.startTime:0,u=n.runningTime?n.runningTime:0,m=n.maxSteps?n.maxSteps:100,p=n.tickStart?n.tickStart:0,d=n.tickRate?n.tickRate:60,h=n.dataPointThreshold?n.dataPointThreshold:s/d<m?1:l.Z.roundInt(s/d/m),g=[],f=[],v=n.totalPotatoes,P=n.curPotatoes,Z=Array(o.length).fill(0);for(let e=0;e<o.length;e++)Z[e]=o[e].production;let D=0,T=!1,M=1;for(d>2&&(M=.95);D<s/d||T;D++){let e=0;for(let t=o.length-1;t>=0;t--){let l=o[t],a=t===o.length-1?0:d>1?i.Z.multiplyDecimal(i.Z.addDecimal(Z[t+1],o[t+1].production),.55*d*M):i.Z.multiplyDecimal(o[t+1].production,d);l.totalMade=i.Z.addDecimal(l.totalMade,a),1===(l=this.calcFutureMult(l,{...n,time:d,numAuto:r[t],string:!1})).ID&&(e=Z[t]),Z[t]=l.production}n.passedTime+=d,n.potionRank>1&&!n.forceRankPotion&&(n.potionRankTime-=d,n.potionRankTime<0&&(n.potionRank=1));let t=l.Z.roundInt(D*d+c),m=d>1?i.Z.multiplyDecimal(i.Z.addDecimal(e,o[0].production),.55*d*M):o[0].production;if(v=i.Z.addDecimal(v,m),P=i.Z.addDecimal(P,m),n.autoBuyPBC){let e=!1,t=!0;for(;t;)if(t=!1,!0===P.greaterThanOrEqualTo(n.nextCosts.prodCost)&&(P=i.Z.subtractDecimal(P,n.nextCosts.prodCost),n.shopProdLevel++,n.shopProdBonus=this.calcShopProdBonus(n,n.shopProdLevel),e=!0,t=!0),!0===P.greaterThanOrEqualTo(n.nextCosts.growthCost)&&(P=i.Z.subtractDecimal(P,n.nextCosts.growthCost),n.shopGrowingSpeed++,e=!0,t=!0),!0===P.greaterThanOrEqualTo(n.nextCosts.expCost)&&(P=i.Z.subtractDecimal(P,n.nextCosts.expCost),n.shopRankLevel++,n.shopRankEXP=1+.1*n.shopRankLevel,e=!0,t=!0),e){let e=this.getNextShopCosts(n);n.nextCosts=e}}if(D%h==0&&t>=p&&t<=s+u&&(g.push({time:t,production:v}),f.push({time:t,fries:a.calcFryOutput(v,n)})),!n.skipFinal){if(T&&t>=s+u)break;!T&&t<s+u&&(T=!0)}}if(D>0&&!n.skipFinal){let e=l.Z.roundInt(D*d+c);if(n.passedTime=D*d+c,0===g.length)g.push({time:e,production:v}),f.push({time:e,fries:a.calcFryOutput(v,n)});else if(g[g.length-1].production!==v&&e>s+u){let t=e-g[g.length-1].time,o=i.Z.divideDecimal(i.Z.subtractDecimal(v,g[g.length-1].production),t),l=s+u-g[g.length-1].time,r=i.Z.addDecimal(g[g.length-1].production,i.Z.multiplyDecimal(o,l)),c={time:g[g.length-1].time+l,production:r};g.push(c),f.push({time:g[g.length-1].time+l,fries:a.calcFryOutput(r,n)}),v=r}}return{totalPotatoes:v,potatoeProduction:o[0].production,plants:o,nextCosts:n.nextCosts,dataPointsPotatoes:g,dataPointsFries:f,finalModifiers:n}},calcStepHPProd:function(e,t){let o=JSON.parse(JSON.stringify(e));for(let e=0;e<o.length;e++)this.resetPlantBD(o[e]);let i=JSON.parse(JSON.stringify(t));this.resetModifiersBD(i);let a=i.steps,n=-1,r=[],s=[],c=0,u=i.maxSteps?i.maxSteps:100,m=i.tickRate?i.tickRate:60,p=t.time/m<u?1:l.Z.roundInt(t.time/m/u);for(let e=0;e<a.length;e++)0!==a[e].time&&((i=(n=this.calcHPProd(o,{...i,numAutos:a[e].autos,time:a[e].time,dataPointThreshold:p,startTime:r.length>0?r[r.length-1].time:0,runningTime:c,skipFinal:e<a.length-1,tickStart:r.length>0?r[r.length-1].time+p*m:0})).finalModifiers).totalPotatoes=n.totalPotatoes,o=n.plants,r=r.concat(n.dataPointsPotatoes),s=s.concat(n.dataPointsFries),a[e].obj={text:"P".concat(a.length-e," for ").concat(a[e].time),numAutos:a[e].autos,time:a[e].time},c+=a[e].time);return n.dataPointsPotatoes=r,n.dataPointsFries=s,n.steps=a,n},calcAssemblyHP:function(e){let t=1;return(null==e?void 0:e.AssemblerCollection[0].BonusList[0].StartingLevel)<=(null==e?void 0:e.AssemblerCollection[0].Level)&&(t=Math.pow(1+(null==e?void 0:e.AssemblerCollection[0].BonusList[0].Gain),(null==e?void 0:e.AssemblerCollection[0].Level)-(null==e?void 0:e.AssemblerCollection[0].BonusList[0].StartingLevel))),t},calcAssembly:function(e,t,o){let l=1;return(null==e?void 0:e.AssemblerCollection[t].BonusList[o].StartingLevel)<=(null==e?void 0:e.AssemblerCollection[t].Level)&&(l=Math.pow(1+(null==e?void 0:e.AssemblerCollection[t].BonusList[o].Gain),Math.max(0,e.AssemblerCollection[t].Level-(e.AssemblerCollection[t].BonusList[o].StartingLevel-1)))),l},calcAssemblyLine:function(e,t){let o=1;return e.StartingLevel<=t&&(o=Math.pow(1+e.Gain,Math.max(0,t-(e.StartingLevel-1)))),o},calcAssemblyCost:function(e,t){i.Z.createDecimal(-1);let o=i.Z.createDecimal(t.AssemblyCostReductionBonus),l=t.AssemblerCollection[e],a=i.Z.createDecimal(l.BaseCost),n=i.Z.addDecimal(a,i.Z.multiplyDecimal(a,l.Level)),r=1+l.CostExpo+l.CostExpo*l.Level*.02,s=i.Z.createDecimal(r),c=i.Z.pow(s,l.Level);return i.Z.divideDecimal(i.Z.multiplyDecimal(n,c),o)},calcProteinPerSecond:function(e){let t=i.Z.createDecimal(e.ProteinBonus),o=i.Z.createDecimal(e.FrenchFriesTotal),l=i.Z.createDecimal(1);if(o.greaterThan(1e10)){let e=i.Z.logDecimal(o,5);e=i.Z.subtractDecimal(e,13.48);let a=i.Z.logDecimal(o,10);a=i.Z.subtractDecimal(a,8),l=i.Z.multiplyDecimal(i.Z.multiplyDecimal(e,i.Z.pow(1.1,a)),t)}return l},calcContagionBonus:function(e,t){let o=1;return e.GrasshopperCollection[t].Locked>0&&(o*=Math.pow(1+.01*l.Z.calcPOW(e.GrasshopperCollection[t].BaseBonus),l.Z.calcPOW(e.GrasshopperCollection[t].Level))),o},calcExpeditionHP:function(e){let t=1;if(e.ExpeditionsCollection[16].Locked>0){let o=e.ExpeditionsCollection[16];t=Math.pow(1+o.BonusPower,o.Room-1)}return t},calcUniqueHPBonus:function(e){let t=1;for(let o=0;o<e.FarmingShopUniqueHealthy.length;o++)t*=e.FarmingShopUniqueHealthy[o]+1;return t},calcFriesHPBonus:function(e){return 1*(1+l.Z.calcPOW(e.FrenchFriesTotal)*((.01*e.FarmingShopFriesHealthyBonus+.1)*this.calcContagionBonus(e,5)))},calcPetHPBonus:function(e){let t=1,o=e.EquipedPetID,i=e.PetsCollection,a={};for(let e=0;e<o.length;e++)o[e]>0&&(a[o[e]]=!0);for(let e=0;e<i.length;e++){let o=i[e];if(o.ID in a)for(let e=0;e<o.BonusList.length;e++){let i=o.BonusList[e];23===i.ID&&(t+=.5*((Math.pow(1+i.Gain,o.Level)-1+Math.max(0,(.005*l.Z.calculateLogarithm(1.0125,o.Level+1)-1)*.5))*(1+.005*l.Z.calculateLogarithm(1.075,o.Rank+1))))}}return t},calcHPBonus:function(e){return l.Z.calcPOW(e.HealthyPotatoBonus)}};t.Z=a},37790:function(e,t){t.Z={roundTwoDecimal:function(e){return Math.round((e+Number.EPSILON)*100)/100},roundThreeDecimal:function(e){return Math.round((e+Number.EPSILON)*1e3)/1e3},roundFiveDecimal:function(e){return Math.round((e+Number.EPSILON)*1e5)/1e5},roundInt:function(e){return Math.round((e+Number.EPSILON)*1)/1},calculateLogarithm:function(e,t){return Math.log(t)/Math.log(e)},calcPOW:function(e){return e.mantissa*Math.pow(10,e.exponent)},secondsToStringWithS:function(e){let t="",o=0,l=0,i=0,a=0;return(o=Math.floor(e/86400),l=Math.floor(e%86400/3600),i=Math.floor(e%3600/60),a=this.roundInt(e%86400%60),o==Number.POSITIVE_INFINITY||o==Number.NEGATIVE_INFINITY)?""+o:(60===a&&(a=0,i++),60===i&&(i=0,l++),24===l&&(l=0,o++),o>0&&(t+="".concat(o<10?"0"+o:o,"d:")),l>0&&(t+="".concat(l<10?"0"+l:l,"h:")),i>0&&(t+="".concat(i<10?"0"+i:i,"m:")),a>0?t+="".concat(a<10?"0"+a:a,"s"):t+="0s",t)},secondsToString:function(e){let t="",o=0,l=0,i=0;return(o=Math.floor(e/86400),l=Math.floor(e%86400/3600),60===(i=this.roundInt(e%3600/60))&&(i=0,l++),24===l&&(l=0,o++),o==Number.POSITIVE_INFINITY||o==Number.NEGATIVE_INFINITY)?""+o:(o>0&&(t+="".concat(o<10?"0"+o:o,"d:"),0===l&&(t+="00h")),(l>0||0===l&&0===o)&&(t+="".concat(l<10?"0"+l:l,"h")),0===o&&(t+=":",i>0?t+="".concat(i<10?"0"+i:i,"m"):t+="0s"),t)},bonusColorMap:{1009:{color:"cyan"},1010:{color:"maroon"},1011:{color:"purple"},1012:{color:"yellow"},1013:{color:"red"},1014:{color:"blue"},1015:{color:"gray"},1016:{color:"green"}}}}}]);