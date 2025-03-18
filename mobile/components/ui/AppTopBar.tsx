import React from 'react';
import { StyleSheet, SafeAreaView, Image } from 'react-native';
import { formatNumber } from '@/utils/formatter';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { textLarge, textMid, textSmall } from '@/constants/Sizes';
import { Text, View } from '../Themed';
import Avatar from '../widgets/Avatar';

interface AppTopBarProps {
    userIcon?: string;
    userName: string;
    email?: string;
    currency: string;
    splitAmount: number
}

const AppTopBar: React.FC<AppTopBarProps> = ({ userIcon, userName, email, currency, splitAmount }) => {
    /** 
     * Responsible for rendering the user info and the split amount that is currently unresolved
     * Params: userIcon (optional), username, email (optional), currency, splitAmount
    */

    const colorScheme = useColorScheme();
    const themeColors = Colors[colorScheme ?? 'light'];

    const splitAmountStyle = {
        color: splitAmount == 0 ? themeColors.gray : splitAmount > 0 ? themeColors.green : themeColors.red,
        sign: splitAmount == 0 ? "" : splitAmount > 0 ? "+" : "-"
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: themeColors.backgroundLight }]}>
            <View style={[styles.leftContainer, {backgroundColor: themeColors.backgroundLight}]}>
                <Avatar uri={userIcon} name={userName}/>
                <View style={{ backgroundColor: themeColors.backgroundLight }} >
                    <Text style={[styles.userName, { color: themeColors.text }]}>{userName}</Text>
                    <Text style={{ color: themeColors.lightText, fontSize: textSmall }}>{ email || 'Guest'} </Text>
                </View>
            </View>
            <View style={[styles.rightContainer, { backgroundColor: themeColors.backgroundLight}]}>
                <Text style={{color: themeColors.lightText, fontSize: textSmall}}>Split Pending</Text>
                <Text style={[styles.balance, { color: splitAmountStyle.color }]}>
                    {splitAmountStyle.sign}{currency} {formatNumber(Math.abs(splitAmount))}
                </Text>
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
    },
    leftContainer: {
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
        fontSize: textLarge,
        fontWeight: 'bold',
    },
    userIconText: {
        fontSize: textLarge,
        fontWeight: 'bold',
    },
    rightContainer: {
        gap: 2,
        margin: 10,
        alignItems: 'flex-end',
    },
    balance: {
        fontSize: textMid,
        fontWeight: 'bold',
    },
});

export default AppTopBar;