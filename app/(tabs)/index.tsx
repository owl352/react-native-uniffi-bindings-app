import {Image} from 'expo-image';
import {StyleSheet} from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import {ThemedText} from '@/components/themed-text';
import {ThemedView} from '@/components/themed-view';

import {DynamicId, IdentifierFfi, IdentityFfi, PlatformVersionFfi} from 'react-native-my-lib'

export default function HomeScreen() {
    const id = new IdentifierFfi(
        new DynamicId.Str({id: '5DbLwAxGBzUzo81VewMUwn4b5P4bpv9FNFybi25XB5Bk'})
    )

    const identity = new IdentityFfi(id, PlatformVersionFfi.PlatformV9)
    // or
    // const identity = new IdentityFfi(id, undefined)

    identity.setBalance(10000n)

    return (
        <ParallaxScrollView
            headerBackgroundColor={{light: '#A1CEDC', dark: '#1D3D47'}}
            headerImage={
                <Image
                    source={require('@/assets/images/partial-react-logo.png')}
                    style={styles.reactLogo}
                />
            }>
            <ThemedText type="title">{id.toHex()}</ThemedText>
            <ThemedText type="title">{id.toBase58()}</ThemedText>
            <ThemedText>{identity.getBalance().toString()}</ThemedText>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});
