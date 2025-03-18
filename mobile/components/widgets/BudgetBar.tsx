import React, { ReactElement } from 'react';
import {  StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { View, Text } from '@/components/Themed'
import { borderRadius, textLarge, textMid } from '@/constants/Sizes'
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';

interface BudgetBarProps {
    icon: ReactElement,
    name: string,
    usedAmount: number;
    totalBudget: number;
}

const BudgetBar: React.FC<BudgetBarProps> = ({ icon, name, usedAmount, totalBudget }) => {

    const colorScheme = useColorScheme();
    const themeColors = Colors[colorScheme ?? 'light'];

    const percentageUsed = (usedAmount / totalBudget) * 100;
    const isOverBudget = percentageUsed > 100

    return (
        <View style={styles.container}>
            <View style={styles.row}>
            <View style={styles.row}>
                {icon}
                <Text style={styles.label}>
                {name}
                </Text>
            </View>
            <Text style={styles.label}>
                {percentageUsed.toFixed(0)}%
            </Text>
            </View>
            
            <ProgressBar 
                progress={usedAmount / totalBudget} 
                color={isOverBudget ? themeColors.red : themeColors.primary} 
                style={[styles.progressBar, {backgroundColor: themeColors.progressBarBackground}]} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: borderRadius,
    },
    title: {
        fontSize: textLarge,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    label: {
        fontWeight: 'bold',
        fontSize: textMid
    },
    row: {
        flexDirection: 'row',
        gap: 4,
        justifyContent: 'space-between',
    },
    budgetText: {
        fontSize: 16,
        marginBottom: 5,
    },
    progressBar: {
        height: 12,
        borderRadius: 5,
        marginTop: 5,
    },
});

export default BudgetBar;