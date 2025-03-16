import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AppTopBar from '@/components/ui/AppTopBar';

const HomeLayout = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <AppTopBar userName='Alex Ngun' splitAmount={42300}/>
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Expenses</Text>
                    {/* Add your expenses components here */}
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Income</Text>
                    {/* Add your income components here */}
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Bank Accounts</Text>
                    {/* Add your bank accounts components here */}
                </View>
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
        padding: 16,
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