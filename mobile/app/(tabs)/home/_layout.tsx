import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useColorScheme } from '@/components/useColorScheme';
import { View } from '@/components/Themed'
import { useNavigation } from '@react-navigation/native';
import Overviews from '@/components/ui/Overviews';
import { AccountsCard } from '@/components/ui/AccountsCard'
import BudgetReport from '@/components/ui/BudgetReport';
import Colors from '@/constants/Colors';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


const HomeLayout = () => {

    const colorScheme = useColorScheme();
    const navigation = useNavigation();
    const themeColors = Colors[colorScheme ?? 'light'];

    const mockBankAccounts = [
        {
            icon: <MaterialCommunityIcons size={28} color={themeColors.text} name='bank'/>,
            accountName: "Citi Bank",
            currency: "CAD",
            last_4_digits: "1234",
            balance: 23151
        },
        {
            icon: <MaterialCommunityIcons size={28} color={themeColors.text} name='bank'/>,
            accountName: "Chase",
            currency: "CAD",
            last_4_digits: "3241",
            balance: 42135
        }
    ]

    return (
        <View style={[styles.container, {backgroundColor: themeColors.backgroundSheet}]}>
            <ScrollView contentContainerStyle={styles.content}>
                <Overviews currentBalance={42131} income={3891} expenses={2410}/>
                <BudgetReport totalBudget={1024} usedAmount={351} />
                <AccountsCard title='Debit' currency='CAD' accounts={mockBankAccounts}/>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 14,
        gap: 20
    },
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
});

export default HomeLayout;