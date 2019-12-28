import { strict as assert } from 'assert';
import { GitHubRepo} from "../../src/github/model";

const EMOJI = '⭐';

describe('GitHubRepo', () => {
    describe('starsInfo', () =>{
        it ('should return an empty string for 0 stars', ()=>{
            //given
            const modelToTest = new GitHubRepo({stars: 0});

            // when
            const result = modelToTest.starsInfo;

            //then
            assert.equal(result, '')


        })
        it ('should return a number of stars with an emoji for a positive stars number', ()=>{
            //given
            const stars = 777;
            const modelToTest = new GitHubRepo({stars});

            // when
            const result = modelToTest.starsInfo;

            //then
            assert.equal(result, `(${stars}${EMOJI})`)

        })
    })
})