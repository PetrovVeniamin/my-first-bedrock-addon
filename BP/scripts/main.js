import {world}  from "@minecraft/server";

world.afterEvents.playerBreakBlock.subscribe((eventData)) => {

 const player = eventData.player;

 const inventory = player.getComponent("minecraft:inventory").container;

 
}