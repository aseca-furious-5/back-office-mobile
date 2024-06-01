import {StyleSheet, Text, View} from 'react-native';

type Item = {
    id: number;
    quantity: number;
    name: string;
    price: number;
};

type Order = {
    id: number;
    items: Item[];
    status: string;
};

type OrderListProps = {
    orders: Order[];
};

export function OrderList({orders}: OrderListProps) {

    return orders ? (
        <View style={styles.container}>
            {orders.map((order) => (
                <View key={order.id}>
                    <Text>Order ID: {order.id}</Text>
                    <Text>Status: {order.status}</Text>
                    {order.items.map((item) => (
                        <View key={item.id} style={styles.item}>
                            <Text>Item Name: {item.name}</Text>
                            <Text>Item Quantity: {item.quantity}</Text>
                            <Text>Item Price: {item.price}</Text>
                        </View>
                    ))}
                </View>
            ))}
        </View>
    ) : <></>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
})