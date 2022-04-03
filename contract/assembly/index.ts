/*
 * This is an example of an AssemblyScript smart contract with two simple,
 * symmetric functions:
 *
 * Learn more about writing NEAR smart contracts with AssemblyScript:
 * https://docs.near.org/docs/develop/contracts/as/intro
 *
 */

import { Context, logging, PersistentMap , storage } from 'near-sdk-as'

let candidateReg = new PersistentMap<string, i32>("Candidate Registration");
let voterReg = new PersistentMap<string, bool>("Voter Registration");

export function addVote(candidate:string):i32{

    if(!voterReg.contains(Context.sender)){
        voterReg.set(Context.sender,true);
        if(!candidateReg.contains(candidate)){
            candidateReg.set(candidate,1);
            logging.log("Candidate Added and Successfully Voted!!!")
        }
        else{
            let currentCount = candidateReg.getSome(candidate);
            currentCount +=1;
            candidateReg.set(candidate,currentCount);
            logging.log("Thank You for voting!")
        }
    }
    else{
        logging.log("Already voted :) ")
    }
    return candidateReg.getSome(candidate);
}

export function getVotes(candidate:string):i32{
    if(candidateReg.contains(candidate)){
        return candidateReg.getSome(candidate);
    }
    
    return 0;

}

export function didVote():bool{
    return voterReg.contains(Context.sender);
}