import React, { useState, useRef, useEffect } from 'react';
import { Animated, StyleSheet, Pressable } from 'react-native';
import { View, Text } from '@/components/Themed'
import { borderRadius, textLarge, textMid, textXLarge } from '@/constants/Sizes';
import { formatNumber } from '@/utils/formatter';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import Entypo from '@expo/vector-icons/Entypo';

interface AccountProps {
    icon: React.ReactElement;
    accountName: string;
    last_4_digits?: string;
    balance: number;
    currency: string;
}

interface AccountsCardProps {
    title: string;
    currency: string;
    accounts: AccountProps[];
}

export const Account : React.FC<AccountProps> = ({icon, accountName, last_4_digits, currency, balance}) => {
    return (
        <View style={styles.row}>
            {icon}
            <View style={styles.wrapper}>
                <Text style={styles.accountName}>{accountName}</Text>
                { last_4_digits && <Text style={styles.subText}>**** {last_4_digits}</Text> }
            </View>
            <Text style={styles.balance}>
                {currency} { formatNumber(balance, "M", 2) }
            </Text>
        </View>
    )

}

export const AccountsCard: React.FC<AccountsCardProps> = ({ title, currency, accounts }) => {

    const colorScheme = useColorScheme();
    const themeColors = Colors[colorScheme ?? 'light'];
    
    const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0);
    const accountCount = accounts.length;

    const [isExpanded, setisExpanded] = useState(false);
    const animation = useRef(new Animated.Value(0)).current;

    const handleExpand = () => {
        setisExpanded(!isExpanded);
    };

    useEffect(() => {
        Animated.timing(animation, {
            toValue: isExpanded ? 1 : 0,
            duration: 300,
            useNativeDriver: false,
        }).start();
    }, [isExpanded]);

    const containerHeight = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [85, accounts.length * 50 + 85], // Adjust these values as needed
    });

    return (
        <Animated.View style={[styles.container, { height: containerHeight, backgroundColor: themeColors.background }]}>
            <Pressable onPress={handleExpand} style={styles.row}>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subText}>{ accountCount } Accounts</Text>
                </View>
                <View style={styles.total_balance_wrapper}>
                    <Text style={styles.total_balance}>
                        {currency} {formatNumber(totalBalance, "M", 2)}
                    </Text>
                    <Entypo size={16} name={isExpanded ? 'chevron-up' : 'chevron-down'} color={themeColors.text}/>
                </View>
            </Pressable>

            { isExpanded && 
                <View style={{marginTop: 15, gap: 10}}>
                    {
                        accounts.map(account => {
                            return (
                                <Account
                                    key={account.accountName + (account.last_4_digits || '')}
                                    {...account}
                                />
                            );
                        })
                    }
                </View>
            }
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: borderRadius,
        elevation: 5,
        overflow: 'hidden', // Ensure content is clipped to the container
    },
    title: {
        fontSize: textXLarge,
        fontWeight: 'bold',
        marginBottom: 5
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    wrapper: {
        maxWidth: '36%'
    },
    accountName: {
        fontSize: textLarge,
        fontWeight: 'bold',
    },
    subText: {
        fontSize: textMid,
        color: 'gray'
    },
    balance: {
        maxWidth: '35%',
        fontSize: textMid,
        marginLeft: 'auto',
        fontWeight: 'bold'
    },
    total_balance_wrapper: {
        flexDirection: 'row',
        marginLeft: 'auto',
        gap: 2
    },
    total_balance: {
        fontSize: textLarge,
        fontWeight: 'bold' 
    }
});