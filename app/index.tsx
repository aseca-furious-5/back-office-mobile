import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Pressable, StyleSheet, Text, View} from 'react-native';
import {OrderList} from '@/components/OrderList';

export default function Index() {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);


    const fetchOrders = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('http://10.0.2.2:3000/order/all');
            const data = await response.json();
            console.log(data);
            setOrders(data);
            setError(null);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <View
            style={styles.container}
        >
            <Pressable onPress={fetchOrders} style={styles.refresh}>
                <Text accessibilityLabel={"Refresh"} >
                    Refresh
                </Text>
            </Pressable>
            <Text accessibilityLabel={'title'} style={styles.title}>Active Orders</Text>
            {isLoading ? (
                <ActivityIndicator size="large" color="#0000ff"/>
            ) : (
                <OrderList orders={orders}/>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    refresh: {
        zIndex: 15,
        position: 'absolute',
        margin: 10,
        padding: 10,
        backgroundColor: 'lightblue',
        borderRadius: 5,
        top: 16,
        right: 16,
    },

    container: {
        flex: 1,
        padding: 24,
    },
    title: {
        fontSize: 32,
    },
});