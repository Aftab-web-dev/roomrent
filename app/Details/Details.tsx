import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { ChevronLeftIcon, PhoneIcon, ChatBubbleBottomCenterIcon } from "react-native-heroicons/solid";
import { BookmarkIcon, HomeIcon, HomeModernIcon, UserCircleIcon } from "react-native-heroicons/outline";
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

const Details = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.imageWrapper}>
                    <Image style={styles.image} source={{ uri: "https://fastly.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA" }} />
                    <View style={styles.header}>
                        <View style={styles.headerContent}>
                            <TouchableOpacity onPress={() => router.back()}>
                                <LinearGradient
                                    colors={['rgba(0, 0, 0, 0.1)', 'rgba(255, 255, 255, 0.3)']}
                                    style={styles.btn}>
                                    <ChevronLeftIcon size={20} color="#fff" />
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <LinearGradient
                                    colors={['rgba(0, 0, 0, 0.1)', 'rgba(255, 255, 255, 0.3)']}
                                    style={styles.btn}>
                                    <BookmarkIcon size={20} color="#fff" />
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <LinearGradient
                        colors={['transparent', 'rgba(0,0,0,0.8)']}
                        style={styles.imageGradient}
                    />
                    <View style={styles.info}>
                        <Text style={styles.title}>Dreamsville House</Text>
                        <Text style={styles.description}>Jl. Sultan Iskandar Muda, Jakarta selatan</Text>
                        <View style={styles.details}>
                            <View style={styles.detailItem}>
                                <LinearGradient
                                    colors={['rgba(0, 0, 0, 0.1)', 'rgba(255, 255, 255, 0.3)']}
                                    style={styles.btn2}>
                                    <HomeIcon size={16} color="white" />
                                </LinearGradient>
                                <Text style={styles.description}>6 Bedroom</Text>
                            </View>
                            <View style={styles.detailItem}>
                                <LinearGradient
                                    colors={['rgba(0, 0, 0, 0.1)', 'rgba(255, 255, 255, 0.3)']}
                                    style={styles.btn2}>
                                    <HomeModernIcon size={16} color="white" />
                                </LinearGradient>
                                <Text style={styles.description}>4 Bathroom</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View>
                    <Text style={styles.title2}>Description</Text>
                    <Text style={styles.description2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit laudantium inventore, magnam doloremque. <Text style={styles.showMore}> Show More</Text></Text>
                </View>
                
                <View style={styles.ownerContainer}>
                    <View style={styles.ownerInfo}>
                        <UserCircleIcon size={40} color="black" />
                        <View>
                            <Text style={styles.name}>Garry Allen</Text>
                            <Text style={styles.owner}>Owner</Text>
                        </View>
                    </View>
                    <View style={styles.contactIcons}>
                        <View style={styles.contactIcon}>
                            <PhoneIcon size={15} color="white" />
                        </View>
                        <View style={styles.contactIcon}>
                            <ChatBubbleBottomCenterIcon size={15} color="white" />
                        </View>
                    </View>
                </View>

                <View>
                    <Text style={styles.title2}>Gallery</Text>
                    <View style={{flexDirection:"row", gap:14}}>
                    <Image style={styles.galleryimage} source={{ uri: "https://fastly.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA" }} />
                    <Image style={styles.galleryimage} source={{ uri: "https://fastly.picsum.photos/id/879/536/354.jpg?hmac=DHlAvQ-DPSPs6YaodJBSc3a9sVFzvTqygKTW1cTbFFY" }} />
                    <Image style={styles.galleryimage} source={{ uri: "https://fastly.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA" }} />
                    <Image style={styles.galleryimage} source={{ uri: "https://fastly.picsum.photos/id/1084/536/354.jpg?grayscale&hmac=Ux7nzg19e1q35mlUVZjhCLxqkR30cC-CarVg-nlIf60" }} />
                    </View>
                </View>

                <View style={{paddingTop:140, flexDirection:"row", justifyContent:"space-between", gap:45}}>
                    <View>
                    <Text style={styles.description2}>price</Text>
                    <Text style={styles.name}>Rp. 2.500.000.000 / Year</Text>
                    </View>
                    <LinearGradient
                style={styles.selectedCategoryButton}
                colors={['#A0DAFB', '#0A8ED9']}
              >
                <Text style={[styles.title2, {color:"#ffff", textAlign:"center"}]}>Rent Now</Text>
              </LinearGradient>

                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 26,
        alignItems: "flex-start",
        justifyContent: "flex-start"
    },
    imageWrapper: {
        position: "relative",
    },
    selectedCategoryButton: {
        width:112,
        height:43,
        borderRadius: 10,
        marginHorizontal: 5,
      },
    image: {
        width: 335,
        height: 319,
        borderRadius: 20,
    },
    galleryimage: {
        width: 72,
        height: 72,
        borderRadius: 8,
    },
    header: {
        position: "absolute",
        top: 10,
        left: 10,
        right: 10,
    },
    headerContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    btn: {
        borderRadius: 20,
        width: 36,
        height: 36,
        justifyContent: "center",
        alignItems: "center",
    },
    imageGradient: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: "50%",
        borderRadius: 20,
    },
    info: {
        position: "absolute",
        bottom: 20,
        left: 20,
    },
    title: {
        fontFamily: "RalewayMedium",
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
    },
    description: {
        fontFamily: "RalewayRegular",
        fontSize: 12,
        paddingTop: 2,
        color: "#fff",
    },
    details: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 10,
    },
    detailItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    btn2: {
        borderRadius: 8,
        width: 28,
        height: 28,
        justifyContent: "center",
        alignItems: "center",
    },
    title2: {
        fontFamily: "RalewayMedium",
        fontSize: 16,
        paddingVertical: 10,
    },
    description2: {
        fontFamily: "RalewayRegular",
        fontSize: 12,
        color: "#858585",
    },
    showMore: {
        color: "#0A8ED9",
    },
    ownerContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        gap: 130,
    },
    ownerInfo: {
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        justifyContent: "flex-start",
    },
    name: {
        fontFamily: "RalewayMedium",
        fontSize: 16,
    },
    owner: {
        fontFamily: "RalewayMedium",
        fontSize: 12,
        color: "#858585",
    },
    contactIcons: {
        flexDirection: "row",
        gap: 10,
    },
    contactIcon: {
        backgroundColor: "#0A8ED9",
        opacity: 0.5,
        width: 28,
        height: 28,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    },
});

export default Details;
