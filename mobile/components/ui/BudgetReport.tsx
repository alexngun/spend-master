import React from 'react';
import {  StyleSheet } from 'react-native';
import { View, Text } from '@/components/Themed'
import { borderRadius, textLarge } from '@/constants/Sizes'
import BudgetBar from '@/components/widgets/BudgetBar';
import { MaterialIcons } from '@expo/vector-icons';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';

interface BudgetReportProps {
    usedAmount: number;
    totalBudget: number;
}

const BudgetReport: React.FC<BudgetReportProps> = ({ usedAmount, totalBudget }) => {

    const colorScheme = useColorScheme();
    const themeColors = Colors[colorScheme ?? 'light'];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Monthly Budget</Text>
            <View style={styles.budgetBarsContainer}>
                <BudgetBar icon={<MaterialIcons color={themeColors.text} size={20} name="restaurant"/>} name='Food/Grocery' usedAmount={200} totalBudget={400}/>
                <BudgetBar icon={<MaterialIcons color={themeColors.text} size={20} name="directions-car-filled"/>} name='Transport' usedAmount={321} totalBudget={400}/>
                <BudgetBar icon={<MaterialIcons color={themeColors.text} size={20} name="sports-esports"/>} name='Entertainment' usedAmount={24} totalBudget={400}/>
                <BudgetBar icon={<MaterialIcons color={themeColors.text} size={20} name="shopping-basket"/>} name='Shopping' usedAmount={721} totalBudget={400}/>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: borderRadius,
        elevation: 5,
    },
    budgetBarsContainer: {
        gap: 15
    },
    title: {
        fontSize: textLarge,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    budgetText: {
        fontSize: 16,
        marginBottom: 5,
    },
    progressBar: {
        height: 20,
        borderRadius: 5,
        marginTop: 10,
    },
});

export default BudgetReport;