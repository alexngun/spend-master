import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Text, View } from '../Themed';
import { textLarge, keyText, borderRadius } from '@/constants/Sizes';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { formatNumber } from '@/utils/formatter';

interface OverviewProps {
    currentBalance: number;
    income: number;
    expenses: number;
}

const Overviews: React.FC<OverviewProps> = ({ currentBalance, income, expenses }) => {

    const colorScheme = useColorScheme();
    const themeColors = Colors[colorScheme ?? 'light'];

    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    const currentYear = currentDate.getFullYear();

    return (
        <View style={styles.card}>
            <View style={{ alignItems: 'center', marginBottom: 10, gap: 4 }}>
                <Text style={[styles.label, {color: themeColors.gray}]}>Current Balance</Text>
                <Text style={{ fontSize: keyText, fontWeight: 'bold' }}>CAD {formatNumber(currentBalance, 'M')}</Text>
            </View>

            <View style={styles.row}>
                <View>
                    <Text style={[styles.label, {color: themeColors.gray}]}>Income:</Text>
                    <Text style={styles.value}>CAD {formatNumber(income, 'M')}</Text>
                </View>
                <View>
                    <Text style={[styles.label, {color: themeColors.gray}]}>Expenses:</Text>
                    <Text style={styles.value}>CAD {formatNumber(expenses, 'M')}</Text>
                </View>
            </View>


            <Pressable style={[styles.dateButton, { backgroundColor: themeColors.lightGray }]}>
                <Text style={styles.label}>
                    {currentMonth} {currentYear}
                </Text>
            </Pressable>

        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 20,
        borderRadius: borderRadius,
        elevation: 3,
    },
    title: {
        fontSize: textLarge,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    label: {
        fontSize: textLarge,
    },
    value: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    dateButton: {
        borderRadius: borderRadius,
        alignItems: 'center',
        marginTop: 10, 
        padding: 8
    }
});

export default Overviews;