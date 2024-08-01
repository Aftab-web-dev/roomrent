import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image  } from 'react-native';
import { BellIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon, MapPinIcon , ChevronDownIcon } from "react-native-heroicons/outline";
import { HomeIcon } from "react-native-heroicons/solid";

const Index = () => {
  const data = [
    "Home", "Apartment", "Hotel", "Villa", "Guest House", "Hostel", "Motel", "Resort", "Cottage", "Bungalow",
    "Studio", "Penthouse", "Bed and Breakfast", "Condo", "Serviced Apartment", "Cabin", "Loft", "Townhouse",
    "Farmhouse", "Chalet"
  ];

  const imagedata = [
    {
      id: 1,
      image: "https://fastly.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA",
      title: "Dreamsville House",
      place: "Jl. Sultan Iskandar Muda",
      kms: "1.8 km"
    },
    {
      id: 2,
      image: "https://fastly.picsum.photos/id/1084/536/354.jpg?grayscale&hmac=Ux7nzg19e1q35mlUVZjhCLxqkR30cC-CarVg-nlIf60",
      title: "Ascot House",
      place: "Jl. Sultan Iskandar Muda",
      kms: "2 km"
    },
    {
      id: 3,
      image: "https://fastly.picsum.photos/id/879/536/354.jpg?hmac=DHlAvQ-DPSPs6YaodJBSc3a9sVFzvTqygKTW1cTbFFY",
      title: "jpg House",
      place: "Jl. Sultan Iskandar Muda",
      kms: "3.4 km"
    },
    {
      id: 4,
      image: "https://fastly.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA",
      title: "jpg House",
      place: "Jl. Sultan Iskandar Muda",
      kms: "3.4 km"
    },
    {
      id: 5,
      image: "https://fastly.picsum.photos/id/1084/536/354.jpg?grayscale&hmac=Ux7nzg19e1q35mlUVZjhCLxqkR30cC-CarVg-nlIf60",
      title: "jpg House",
      place: "Jl. Sultan Iskandar Muda",
      kms: "3.4 km"
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.locationText}>Location</Text>
          <View style={styles.ChevronDown}>
          <Text style={styles.cityText}>Jakarta</Text>
          <ChevronDownIcon size={12} color="#000"/>
          </View>
        </View>
        <BellIcon size={24} color="#000" />
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <MagnifyingGlassIcon size={16} color="#000" />
          <Text style={styles.searchPlaceholder}>Search address, or near you </Text>
        </View>
        <LinearGradient
          style={styles.filterButton}
          colors={['#A0DAFB', '#0A8ED9']}
        >
          <AdjustmentsHorizontalIcon size={24} color="#fff" />
        </LinearGradient>
      </View>
      <ScrollView style={styles.categoryScroll} horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.map((curr, index) => (
          <TouchableOpacity key={index} onPress={() => setSelectedCategory(curr)}>
            {selectedCategory === curr ? (
              <LinearGradient
                style={styles.selectedCategoryButton}
                colors={['#A0DAFB', '#0A8ED9']}
              >
                <Text style={styles.selectedCategoryText}>{curr}</Text>
              </LinearGradient>
            ) : (
              <View style={styles.categoryButton}>
                <Text style={styles.categoryText}>{curr}</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Near from you</Text>
          <Text style={styles.sectionSubtitle}>See more</Text>
        </View>

        

        <ScrollView style={styles.imageScroll} horizontal={true} showsHorizontalScrollIndicator={false}>
          {imagedata.map((curr, index) => (
            <View key={index} style={styles.imageCard}>
              <TouchableOpacity    onPress={() => router.push({
                            pathname: "/Details/Details",
                            params: { image: curr.image, title: curr.title, place: curr.place }
                        })}>
              <Image
                source={{ uri: curr.image }}
                style={styles.image}
                resizeMode='cover'
              />
              </TouchableOpacity>
              <View style={styles.imageInfoBox}>
                <MapPinIcon size={16} color="#fff" />
                <Text style={styles.imageInfoText}>{curr.kms}</Text>
              </View>
              <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.8)']}
                style={styles.imageGradient}
              />
              <View style={styles.imageTextContainer}>
                <Text style={styles.imagePlaceText}>{curr.place}</Text>
                <Text style={styles.imageTitleText}>{curr.title}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Best for you</Text>
          <Text style={styles.sectionSubtitle}>See more</Text>
        </View>

        <View style={styles.bestForYouContainer}>
          <Image source={{ uri: 'https://fastly.picsum.photos/id/879/536/354.jpg?hmac=DHlAvQ-DPSPs6YaodJBSc3a9sVFzvTqygKTW1cTbFFY' }} style={styles.bestForYouImage} />
          <View style={styles.bestForYouTextContainer}>
            <Text style={styles.bestForYouTitle}>Orchad House</Text>
            <Text style={styles.bestForYouPrice}>Rp. 2.500.000.000 / Year</Text>
            <View style={styles.bestForYouDetailsContainer}>
              <View style={styles.bestForYouDetails}>
                <HomeIcon size={12} color="#858585" />
                <Text style={styles.bestForYouDetailsText}>6 Bedroom</Text>
              </View>
              <View style={styles.bestForYouDetails}>
                <HomeIcon size={12} color="#858585" />
                <Text style={styles.bestForYouDetailsText}>4 Bathroom</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  locationText: {
    color: "#838383",
    fontFamily: "RalewayRegular",
    fontSize: 12,
  },
  cityText: {
    fontFamily: "RalewayMedium",
    fontSize: 20,
  },
  ChevronDown:{
  flexDirection:"row", alignItems:"center", gap:8
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
    gap: 10,
    paddingHorizontal: 20,
  },
  searchBox: {
    backgroundColor: "#F7F7F7",
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    gap: 10,
    borderRadius: 10,
    flex: 1,
  },
  searchPlaceholder: {
    color: "#838383",
    fontFamily: "RalewayRegular",
    fontSize: 12,
  },
  filterButton: {
    padding: 15,
    borderRadius: 10,
  },
  categoryScroll: {
    marginTop: 15,
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  categoryButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#F7F7F7",
    marginHorizontal: 5,
  },
  categoryText: {
    color: "#000",
    fontFamily: "RalewayRegular",
    fontSize: 12,
  },
  selectedCategoryButton: {
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  selectedCategoryText: {
    color: "#fff",
    fontFamily: "RalewayRegular",
    fontSize: 12,
  },
  sectionContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontFamily: "RalewayMedium",
    fontSize: 16,
  },
  sectionSubtitle: {
    color: "#0A8ED9",
    fontFamily: "RalewayRegular",
    fontSize: 12,
  },
  imageScroll: {
    marginTop: 15,
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  imageCard: {
    position: "relative",
    width: 222,
    height:272,
    marginRight: 15,
    borderRadius: 20,
  },
  image: {
    width: 222,
    height:272,
    borderRadius: 20,
  },
  imageInfoBox: {
    flexDirection: "row",
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#000000",
    opacity:0.3,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  imageInfoText: {
    color: "#fff",
    marginLeft: 5,
    fontFamily: "RalewayRegular",
    fontSize: 12,
  },
  imageGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "50%",
    borderRadius: 20,
  },
  imageTextContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
  },
  imagePlaceText: {
    color: "#fff",
    fontFamily: "RalewayRegular",
    fontSize: 12,
  },
  imageTitleText: {
    color: "#fff",
    fontFamily: "RalewayMedium",
    fontSize: 16,
  },
  bestForYouContainer: {
    flexDirection: "row",
    backgroundColor: "#F7F7F7",
    borderRadius: 20,
    padding: 15,
    marginTop: 15,
  },
  bestForYouImage: {
    width: 120,
    height: 120,
    borderRadius: 20,
    marginRight: 15,
  },
  bestForYouTextContainer: {
    flex: 1,
    justifyContent: "center",
  },
  bestForYouTitle: {
    fontFamily: "RalewayMedium",
    fontSize: 16,
  },
  bestForYouPrice: {
    fontFamily: "RalewayRegular",
    fontSize: 12,
    marginVertical: 5,
  },
  bestForYouDetailsContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  bestForYouDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  bestForYouDetailsText: {
    color: "#858585",
    fontFamily: "RalewayRegular",
    fontSize: 12,
    marginLeft: 5,
  },
});

export default Index;
