import React from 'react';
import { StyleSheet, SafeAreaView, Image } from 'react-native';
import { formatNumber } from '@/utils/formatter';
import { useColorScheme } from '@/components/useColorScheme';

import Colors from '@/constants/Colors';
import { Text, View } from '../Themed';

interface AppTopBarProps {
    userIcon?: string;
    userName: string;
    splitAmount: number
}

const getInitials = (name: string) => {
    const nameParts = name.split(' ');
    if (nameParts.length === 1) {
        return nameParts[0].charAt(0).toUpperCase();
    }
    return nameParts[0].charAt(0).toUpperCase() + nameParts[1].charAt(0).toUpperCase();
};

const AppTopBar: React.FC<AppTopBarProps> = ({ userIcon, userName, splitAmount }) => {
    /** 
     * Responsible for rendering the user info and the split amount that is currently unresolved
     * Params: userIcon (optional), username, amount
    */

    const colorScheme = useColorScheme();
    const themeColors = Colors[colorScheme ?? 'light'];

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: themeColors.backgroundLight }]}>
            <View style={[styles.leftContainer, {backgroundColor: themeColors.backgroundLight}]}>
                {userIcon ? (
                    <Image 
                        source={{ uri: userIcon }} 
                        style={styles.userIcon} 
                    />
                ) : (
                    <View style={styles.userIconPlaceholder} lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)">
                        <Text style={[styles.userIconText, { color: 'gray' }]}>{getInitials(userName)}</Text>
                    </View>
                )}
                <View style={{ backgroundColor: themeColors.backgroundLight }} >
                    <Text style={[styles.userName, { color: themeColors.text }]}>{userName}</Text>
                    <Text style={[styles.userType, { color: themeColors.text }]}>Self</Text>
                </View>
            </View>
            <View style={[styles.rightContainer, { backgroundColor: themeColors.backgroundLight}]}>
                <Text lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)">Pending</Text>
                <Text style={styles.balance}>+CAD{formatNumber(splitAmount)}</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 110,
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    leftContainer: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    userIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    userIconPlaceholder: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    userType: {
        fontSize: 12,
    },
    userIconText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    rightContainer: {
        margin: 10,
        alignItems: 'flex-end',
    },
    balance: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default AppTopBar;