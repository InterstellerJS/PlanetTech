import * as NODE  from 'three/nodes';
import * as THREE from 'three';
import {Sphere}   from '../sphere/sphere.js';

export class CelestialBodies extends Sphere{
    constructor(params,name,type){
        super(
            params.size,
            params.size,
            params.polyCount,
            params.polyCount,
            params.quadTreeDimensions)

        this.build(
            params.levels,
            params.radius,
            params.displacmentScale,
            params.lodDistanceOffset,
            params.material,
            params.color,
        )
        this.params = params
        this.type   = type
        this.name   =  name ? name : crypto.randomUUID()
    }

    textuers(N,D,isTiles=false){
        this.right .addTexture([N[0],D[0]], this.params.displacmentScale,isTiles)
        this.left  .addTexture([N[1],D[1]], this.params.displacmentScale,isTiles)
        this.top   .addTexture([N[2],D[2]], this.params.displacmentScale,isTiles)
        this.bottom.addTexture([N[3],D[3]], this.params.displacmentScale,isTiles)
        this.front .addTexture([N[4],D[4]], this.params.displacmentScale,isTiles)
        this.back  .addTexture([N[5],D[5]], this.params.displacmentScale,isTiles)
    }

    light(ld){
        this.front .lighting(ld)
        this.back  .lighting(ld)
        this.right .lighting(ld)
        this.left  .lighting(ld)
        this.top   .lighting(ld)
        this.bottom.lighting(ld)
    }

    orbit(numOfOrbits,offsets){
        this.orbits = []
        let metaData = this.metaData()
        let center = metaData.center
        let radius = metaData.radius
        for (let index = 0; index < numOfOrbits; index++) {

            this.orbits.push(new THREE.Sphere(new THREE.Vector3(...center),radius*offsets[index]))
        }
    }


}