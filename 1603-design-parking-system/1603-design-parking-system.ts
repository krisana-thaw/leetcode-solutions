interface CarPark{
    big: number;
    medium: number;
    small: number;
}
class ParkingSystem {
    protected carPark: CarPark; 
    constructor(big: number, medium: number, small: number) {
        this.carPark = {
            big, medium, small
        }
    }

    addCar(carType: number): boolean {
        if (carType === 1){
            if (this.carPark["big"] > 0){
                this.carPark["big"] -= 1;
                return true;
            }
            return false;
        }
        if (carType === 2){
            if (this.carPark["medium"] > 0){
                this.carPark["medium"] -= 1;
                return true;
            }
            return false;
        }
        if (carType === 3){
            if (this.carPark["small"] > 0){
                this.carPark["small"] -= 1;
                return true;
            }
            return false;
        }
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */