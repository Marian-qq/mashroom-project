import { action, makeObservable, observable } from "mobx"

class Store {
    totalEarnedCoins = 0;
    totalEnergy = 15;
    user = {};

    constructor() {
        makeObservable(this, {
            totalEarnedCoins: observable,
            totalEnergy: observable,
            user: observable,
            setTotalEarnedCoins: action,
            decreaseTotalEnergy: action,
            increaseTotalEnergy: action,
            setUser: action,
        })
    }


    setTotalEarnedCoins = () => {
        this.totalEarnedCoins += 1
    };
    decreaseTotalEnergy = () => {
        this.totalEnergy -= 1
    }
    increaseTotalEnergy = () => {
        this.totalEnergy += 1
    }
    setUser = (user) => {
        this.user = user;
        this.totalEarnedCoins = user.coins;
    }

}

export const store = new Store();