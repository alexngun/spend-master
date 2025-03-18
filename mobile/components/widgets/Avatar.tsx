import React from 'react';
import { useColorScheme } from '@/components/useColorScheme';
import { StyleSheet, Image } from 'react-native';
import Colors from '@/constants/Colors';
import { Text, View } from '../Themed';
import { textLarge, textSmall } from '@/constants/Sizes';

interface AvatarProps {
    size?: number;
    uri?: string;
    name: string;
}

const getInitials = (name: string) => {
    const nameParts = name.split(' ');
    if (nameParts.length === 1) {
        return nameParts[0].charAt(0).toUpperCase();
    }
    return nameParts[0].charAt(0).toUpperCase() + nameParts[1].charAt(0).toUpperCase();
};

const Avatar: React.FC<AvatarProps> = ({ uri, name }) => {

    const colorScheme = useColorScheme();
    const themeColors = Colors[colorScheme ?? 'light'];

    return uri ?
        <Image 
            source={{ uri: uri }} 
            style={styles.userIcon} 
        />:
        <View style={[styles.userIconPlaceholder, { backgroundColor: themeColors.defaultAvatarBackground }]}>
            <Text style={[styles.userIconText, { color: themeColors.defaultAvatarText }]}>{getInitials(name)}</Text>
        </View>
};

const styles = StyleSheet.create({
    userIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginHorizontal: 8
    },
    userIconPlaceholder: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 8
    },
    userIconText: {
        fontSize: textLarge,
        fontWeight: 'bold',
    },
});

export default Avatar