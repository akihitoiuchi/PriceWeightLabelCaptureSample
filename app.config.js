export default {
  expo: {
    name: "PriceWeightLabelCaptureSample",
    slug: "priceweightlabelcapturesample",
    owner: "aiuchi",
    jsEngine: "jsc",
    version: "1.0.0",
    sdkVersion: "53.0.0",
    orientation: "portrait",
    platforms: ["ios"],
    ios: {
      bundleIdentifier: "com.aiuchi.smartlabel",
      infoPlist: {
        NSCameraUsageDescription: "このアプリはバーコードをスキャンするためにカメラを使用します。",
	ITSAppUsesNonExemptEncryption: false
      }
    },
    extra: {
      SCANDIT_LICENSE_KEY: "Ak72HYyBGHJCH8IGFP+3gtsB24iwEyCaliWWAODMAO4PTpDvRG64Cwweu0BhTEHPg051DgdqQenqKtVA/U+nqIlXXRWbar9jtEiSRARgc1q7PNOcW2A8tJgq4r6oTlS2V0gqYjshVU3VfBRVpkzVq2FpEd7tToyxH1HLIs4VEdiEe+QABwEuu+ceF3teM470ziEuYisQ8iZXyrP9/7a/vRw5s44eSIim/ZiwcpSpQyetc2+MRsGd/FhDEKJ3lfIgDqQEJVwBP/u7kNdFl7OpNPJmG012C97ZeivVwjA8+REcPmwKcbfYjAvr5T1ZDdLqYlPqnwNkxWTQptwpmKbSRTBHjkqQONN/hSJtbT23OfX3K3IxhRqOPehSPJiIijL/Z2FFylPSXqYcNd2kq2Gb81oCjX1ogch4bv3K/wZWOolcMb6ryFgnVu7t2vyU0rGhEvCJtZJM802JlpOw0bXhuZ2lzmT1rG3xCGgYih1A0DVXkc2AcoQOa3GOEv5Lv93ELtCHvVZNKzB3jcC8uZA3cWMXt9qQi36afd1ng/QgJJf/ODEsn6vc3FNGBkH6dpe7KCE4RemYdH//HRcl5EiAJ8kHU0vFR2jQ6P3fxfR4DNOxOojqT+aa9locB+PgXPc3FnFhphvS9EYeuja6wTqa/I0chys55pMwFzn2YLHk4WjYk53rEJUgVXBvplyfXuyLYC5UaqBGwd5Jvh8UVBiFr7O0JRfBoN32R2wNJTvuHx9kH6kiD0MSaoy62DUtIRT24DdhOtOOQknRv7AHAGCB6HRUfPz010mGS8JgiLiGYI6VWzv5d6oieEPw/YDuvsTxNbe/2nSlXzZ8IVJgdYFTWvt0I9WB2oxtIUKfE5a2qVBGkaNvrA==",
      eas: {
        "projectId": "f8177d7c-1e1f-49ed-b253-7ccec193832c"
      }
    }
  }
}
