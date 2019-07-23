class Solution {
public:
    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
        unordered_set <int> myHash1;
        for (int i=0; i<nums1.size(); i++) {
            if (myHash1.count(nums1[i])==0) {
                myHash1.insert(nums1[i]);
            }
        }
        vector<int>arr;
        for (int j=0; j<nums2.size(); j++) {
            if (myHash1.count(nums2[j])==1) {
                myHash1.erase(nums2[j]);
                arr.push_back(nums2[j]);
            }
        }
        return arr;
    }
};
