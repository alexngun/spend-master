import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useColorScheme } from '@/components/useColorScheme';
import { View } from '@/components/Themed'
import { useNavigation } from '@react-navigation/native';
import Overviews from '@/components/ui/Overviews';
import BudgetReport from '@/components/ui/BudgetReport';
import Colors from '@/constants/Colors';

const HomeLayout = () => {

    const colorScheme = useColorScheme();
    const navigation = useNavigation();
    const themeColors = Colors[colorScheme ?? 'light'];

    return (
        <View style={[styles.container, {backgroundColor: themeColors.backgroundSheet}]}>
            <ScrollView contentContainerStyle={styles.content}>
                <Overviews currentBalance={421311} income={4000} expenses={2410}/>
                <BudgetReport totalBudget={1024} usedAmount={351} />
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