import Image from "next/image";
import { useState } from "react";
import styles from "./Product.module.css";
import axios from "axios";
import { TRACE_OUTPUT_VERSION } from "next/dist/shared/lib/constants";

const Product = ({ pizza }) => {
    const [size, setSize] = useState(0);

    const handleChange = (e, option) => {
        const check = e.target.checked;
        if (checked) {
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image
                        src={pizza.img}
                        layout="fill"
                        alt=""
                        objectFit="contain"
                    />
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{pizza.name}</h1>
                <span className={styles.price}>${pizza?.prices[size]}</span>
                <p className={styles.desc}>{pizza.desc}</p>
                <h3 className={styles.choose}>Choose the size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={() => setSize(0)}>
                        <Image src="/img/size.png" layout="fill" alt="" />
                        <span className={styles.number}>Small</span>
                    </div>
                    <div className={styles.size} onClick={() => setSize(1)}>
                        <Image src="/img/size.png" layout="fill" alt="" />
                        <span className={styles.number}>Medium</span>
                    </div>
                    <div className={styles.size} onClick={() => setSize(2)}>
                        <Image src="/img/size.png" layout="fill" alt="" />
                        <span className={styles.number}>Large</span>
                    </div>
                </div>

                <h3 className={styles.choose}>Choose additional ingredients</h3>
                <div className={styles.ingredients}>
                    {pizza.extraOptions.map((option) => (
                        <div className={styles.option} key={option._id}>
                            <input
                                type="checkbox"
                                id={option.text}
                                name={option.text}
                                className={styles.checkbox}
                                onChange={(e) => {
                                    handleChange(e, option);
                                }}
                            />
                            <label htmlFor={option.text}>{option.text}</label>
                        </div>
                    ))}

                    <div className={styles.option}>
                        <input
                            type="checkbox"
                            id="spicy"
                            name="spicy"
                            className={styles.checkbox}
                        />
                        <label htmlFor="spicy">Spicy Sauce</label>
                    </div>
                    <div className={styles.option}>
                        <input
                            type="checkbox"
                            id="garlic"
                            name="garlic"
                            className={styles.checkbox}
                        />
                        <label htmlFor="garlic">Garlic Sauce</label>
                    </div>
                </div>
                <div className={styles.add}>
                    <input
                        type="number"
                        defaultValue={1}
                        className={styles.quantity}
                    />
                    <button className={styles.button}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps = async (context) => {
    const {
        query: { id },
    } = context;
    const res = await axios.get(`http://localhost:3000/api/products/${id}`);
    return {
        props: {
            pizza: res.data,
        },
    };
};

export default Product;
