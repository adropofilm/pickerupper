import FeaturedCard from "./featuredCard";
import styles from "./styles.module.css"
import distance from "../../../../assets/distance.png"
import food from "../../../../assets/food.png"
import moving from "../../../../assets/moving.png"
import packages from "../../../../assets/packages.png"
import personals from "../../../../assets/personals.png"
import regular from "../../../../assets/regular.png"

const Featured = () => {
    return (
        <div id={styles["featured"]}>
            <h2 className="blue-header-txt">Featured Services</h2>
            <div id={styles["featured-cards-container"]}>
                <FeaturedCard src={distance} alt="Hand on car wheel" text="Distance Pickups"/>
                <FeaturedCard src={food} alt="Fruit displayed on shelves in grocery store" text="Food Pickups"/>
                <FeaturedCard src={moving} alt="Mover unloading truck" text="Moving Services"/>
                <FeaturedCard src={packages} alt="Man holding packages" text="Packages"/>
                <FeaturedCard src={personals} alt="Button up shirts on hangers" text="Personals"/>
                <FeaturedCard src={regular} alt="Man unloading boxes from a car" text="Regular Pickups"/>
            </div>
        </div>
    )
}

export default Featured;